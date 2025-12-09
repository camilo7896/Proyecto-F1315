import {
  collection,
  getDocs,
  getFirestore,
  updateDoc,
  doc,
  getDoc
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import RaceOperator from '../Race';
import app from '../../lib/credentialFirebase';
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);

// Tipos y interfaces
interface MachineData {
  horasAsignadas: string;
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
  reference: string;
  paradasMayores: string;
  observaciones: string;
}

interface Registro {
  id: string;
  fecha: string;
  operatorCode: string;
  operatorName: string;
  machines: MachineData[];
  totalHours?: string;
  estado?: string;
  timestamp?: string;
}

interface EficencePicadoProps {
  editable?: boolean;
}

interface MachineStandards {
  [key: string]: string;
}

interface EditValues {
  horometroInicial: string;
  horometroFinal: string;
  horasAsignadas: string;
  reference: string;
  paradasMayores: string;
  observaciones: string;
  fecha?: string;
}

interface UserData {
  role: string;
}

interface ExportRow {
  Fecha: string;
  Máquina: string;
  'Código Operario': string;
  'Nombre Operario': string;
  'Horómetro Inicial': string;
  'Horómetro Final': string;
  Referencia: string;
  'Paradas Mayores': string;
  Observaciones: string;
  'Horas Asignadas': string;
  'Horas Trabajadas': string;
  Estándar: string;
  'Estandar en horas': string;
  'Eficiencia (horas)': string;
  Estado: string;
  'ID Registro': string;
}

// Componente principal
const EficencePicado: React.FC<EficencePicadoProps> = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [machineStandards, setMachineStandards] = useState<MachineStandards>(
    {}
  );
  const [fechaFiltro, setFechaFiltro] = useState<string>('');
  const [maquinaFiltro, setMaquinaFiltro] = useState<string>('');
  const [mesFiltro, setMesFiltro] = useState<string>(() => {
    const ahora = new Date();
    return ahora.toISOString().slice(0, 7);
  });
  const [filtroOperario, setFiltroOperario] = useState<string>('');
  const [cargando, setCargando] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string>('');

  // Nuevos estados para filtro por rango de fechas
  const [fechaDesde, setFechaDesde] = useState<string>('');
  const [fechaHasta, setFechaHasta] = useState<string>('');
  const [usarRangoFechas, setUsarRangoFechas] = useState<boolean>(false);

  // Estado para el modal de edición
  const [modalAbierto, setModalAbierto] = useState<boolean>(false);
  const [edicionActual, setEdicionActual] = useState<{
    registroId: string;
    machineIndex: number;
    campo: string;
  } | null>(null);

  const [editValues, setEditValues] = useState<EditValues>({
    horometroInicial: '',
    horometroFinal: '',
    horasAsignadas: '',
    reference: '',
    paradasMayores: '',
    observaciones: '',
    fecha: ''
  });

  // Obtener el rol del usuario actual
  useEffect(() => {
    const obtenerRolUsuario = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data() as UserData;
            setUserRole(userData.role || '');
          }
        }
      } catch (error) {
        console.error('Error al obtener el rol del usuario:', error);
      }
    };

    obtenerRolUsuario();
  }, []);

  // Verificar si el usuario tiene permisos de edición
  const puedeEditar = (): boolean => {
    return userRole === 'admin' || userRole === 'superadmin';
  };

  // Abrir modal para editar un campo específico
  const abrirModalEdicion = (
    registroId: string,
    machineIndex: number,
    campo: string,
    valoresActuales: MachineData,
    fechaRegistro: string
  ) => {
    if (!puedeEditar()) return;

    setEdicionActual({ registroId, machineIndex, campo });
    setEditValues({
      horometroInicial: valoresActuales.horometroInicial || '',
      horometroFinal: valoresActuales.horometroFinal || '',
      horasAsignadas: valoresActuales.horasAsignadas || '',
      reference: valoresActuales.reference || '',
      paradasMayores: valoresActuales.paradasMayores || '',
      observaciones: valoresActuales.observaciones || '',
      fecha: fechaRegistro || ''
    });
    setModalAbierto(true);
  };

  // Cerrar modal
  const cerrarModal = () => {
    setModalAbierto(false);
    setEdicionActual(null);
  };

  // Actualizar un campo específico (sin guardar quien editó)
  const actualizarCampo = async (campo: string) => {
    if (!edicionActual) return;

    setCargando(true);
    const { registroId, machineIndex } = edicionActual;

    try {
      const registro = registros.find((r) => r.id === registroId);
      if (!registro) throw new Error('Registro no encontrado');

      const registroRef = doc(db, 'registro_horometros', registroId);

      // Si estamos editando la fecha, actualizamos el campo fecha del registro
      if (campo === 'fecha') {
        await updateDoc(registroRef, {
          fecha: editValues.fecha
        });

        // Actualizar el estado local
        setRegistros((prev) =>
          prev.map((r) =>
            r.id === registroId
              ? { ...r, fecha: editValues.fecha || r.fecha }
              : r
          )
        );
      } else {
        // Actualizar campo específico de la máquina
        const machinesActualizadas = [...registro.machines];
        machinesActualizadas[machineIndex] = {
          ...machinesActualizadas[machineIndex],
          [campo]: editValues[campo as keyof Omit<EditValues, 'fecha'>] || ''
        };

        await updateDoc(registroRef, {
          machines: machinesActualizadas
        });

        // Actualizar el estado local
        setRegistros((prev) =>
          prev.map((r) =>
            r.id === registroId ? { ...r, machines: machinesActualizadas } : r
          )
        );
      }

      alert('Campo actualizado correctamente ✅');
      cerrarModal();
    } catch (error) {
      console.error('Error al actualizar campo:', error);
      alert('Error al actualizar el campo. Por favor, intente nuevamente.');
    } finally {
      setCargando(false);
    }
  };

  // Función para convertir fecha a timestamp para comparación
  const convertirFechaATimestamp = (fechaStr: string): number => {
    if (!fechaStr) return 0;
    return new Date(fechaStr).getTime();
  };

  // Carga datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'registro_horometros')
        );
        const data: Registro[] = [];
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          data.push({
            id: doc.id,
            fecha: docData.fecha,
            operatorCode: docData.operatorCode,
            operatorName: docData.operatorName,
            machines: docData.machines || [],
            totalHours: docData.totalHours,
            estado: docData.estado,
            timestamp: docData.timestamp || docData.fecha
          });
        });
        setRegistros(data);
      } catch (error) {
        console.error('Error fetching registros:', error);
      }
    };
    fetchData();

    // Cargar estándares de máquinas
    const fetchMachineStandards = async () => {
      try {
        const standardsSnapshot = await getDocs(collection(db, 'machines'));
        const standards: MachineStandards = {};
        standardsSnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.abbreviation && data.efficiency) {
            standards[data.abbreviation] = data.efficiency;
          }
        });
        setMachineStandards(standards);
      } catch (error) {
        console.error('Error fetching machine standards:', error);
      }
    };
    fetchMachineStandards();
  }, []);

  // Formatear fecha
  const formatearFecha = (fechaISO: string): string => {
    if (!fechaISO) return '';
    const fecha = new Date(fechaISO);
    if (isNaN(fecha.getTime())) return fechaISO;

    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
  };

  // Filtros y ordenamiento ASCENDENTE
  const registrosFiltrados = registros
    .filter((reg) => {
      // Filtro por rango de fechas
      if (usarRangoFechas && (fechaDesde || fechaHasta)) {
        const fechaRegistro = convertirFechaATimestamp(reg.fecha);
        const desde = convertirFechaATimestamp(fechaDesde);
        const hasta = convertirFechaATimestamp(fechaHasta);

        if (fechaDesde && fechaHasta) {
          return fechaRegistro >= desde && fechaRegistro <= hasta;
        } else if (fechaDesde) {
          return fechaRegistro >= desde;
        } else if (fechaHasta) {
          return fechaRegistro <= hasta;
        }
        return true;
      }

      // Filtro por fecha específica (compatibilidad con filtro anterior)
      if (!usarRangoFechas && fechaFiltro) {
        const fecha = new Date(reg.fecha);
        if (isNaN(fecha.getTime())) return false;

        const año = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, '0');
        const dia = String(fecha.getDate()).padStart(2, '0');
        const fechaRegistro = `${año}-${mes}-${dia}`;
        return fechaRegistro === fechaFiltro;
      }
      return true;
    })
    .filter((reg) => {
      if (maquinaFiltro) {
        return reg.machines.some((m) => m.machine === maquinaFiltro);
      }
      return true;
    })
    .filter((reg) =>
      filtroOperario ? reg.operatorCode === filtroOperario : true
    )
    .filter((reg) => {
      if (mesFiltro && !usarRangoFechas) {
        try {
          const regMes = new Date(reg.fecha).toISOString().slice(0, 7);
          return regMes === mesFiltro;
        } catch {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      const fechaA = a.timestamp || a.fecha;
      const fechaB = b.timestamp || b.fecha;

      const tA = new Date(fechaA).getTime();
      const tB = new Date(fechaB).getTime();

      // Orden ASCENDENTE (más antiguo primero)
      return tA - tB;
    });

  // Obtener opciones únicas para los filtros basados en los registros filtrados
  const operariosUnicos = Array.from(
    new Set(registrosFiltrados.map((r) => r.operatorCode))
  ).sort();
  const maquinasUnicas = Array.from(
    new Set(
      registrosFiltrados.flatMap((reg) => reg.machines.map((m) => m.machine))
    )
  ).sort();

  const mostrarHoras = (valor: string): string => {
    const num = parseFloat(valor);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  // Función para limpiar todos los filtros
  const limpiarFiltros = () => {
    setFechaFiltro('');
    setFechaDesde('');
    setFechaHasta('');
    setUsarRangoFechas(false);
    setMaquinaFiltro('');
    setMesFiltro(new Date().toISOString().slice(0, 7));
    setFiltroOperario('');
  };

  // Función para exportar a CSV
  const handleExportAllCSV = () => {
    try {
      const headers = [
        'Fecha',
        'Máquina',
        'Código Operario',
        'Nombre Operario',
        'Horómetro Inicial',
        'Horómetro Final',
        'Referencia',
        'Paradas Mayores',
        'Observaciones',
        'Horas Asignadas',
        'Horas Trabajadas',
        'Estándar',
        'Estandar en horas',
        'Eficiencia (horas)',
        'Estado',
        'ID Registro'
      ];

      const rows: ExportRow[] = registrosFiltrados.flatMap((reg) =>
        reg.machines
          .filter((m) => !maquinaFiltro || m.machine === maquinaFiltro)
          .map((machine): ExportRow => {
            const horoFin = parseFloat(machine.horometroFinal) || 0;
            const horoIni = parseFloat(machine.horometroInicial) || 0;
            const totalHoras = horoFin - horoIni;

            const standard = parseFloat(
              machineStandards[machine.machine] || '0'
            );
            const horasAsignadas = parseFloat(machine.horasAsignadas) || 0;

            const eficiencia = totalHoras - standard * horasAsignadas;

            return {
              Fecha: formatearFecha(reg.fecha),
              Máquina: machine.machine || 'N/A',
              'Código Operario': reg.operatorCode || 'N/A',
              'Nombre Operario': reg.operatorName || 'N/A',
              'Horómetro Inicial': machine.horometroInicial || '0.00',
              'Horómetro Final': machine.horometroFinal || '0.00',
              Referencia: machine.reference || 'N/A',
              'Paradas Mayores': machine.paradasMayores || '0.00',
              Observaciones: machine.observaciones || '',
              'Horas Asignadas': mostrarHoras(machine.horasAsignadas || '0'),
              'Horas Trabajadas': totalHoras.toFixed(2),
              Estándar: standard.toString(),
              'Estandar en horas': (standard * horasAsignadas).toFixed(2),
              'Eficiencia (horas)': eficiencia.toFixed(2),
              Estado: reg.estado || 'Pendiente',
              'ID Registro': reg.id || 'N/A'
            };
          })
      );

      // Mejorar el formato CSV para evitar problemas con comas y saltos de línea
      const csvContent = [
        headers.join(','),
        ...rows.map((row) =>
          headers
            .map((header) => {
              const value = row[header as keyof ExportRow];
              // Escapar comillas y saltos de línea
              const escapedValue = String(value || '')
                .replace(/"/g, '""')
                .replace(/\n/g, ' ')
                .replace(/\r/g, ' ');

              // Siempre envolver en comillas para evitar problemas con comas
              return `"${escapedValue}"`;
            })
            .join(',')
        )
      ].join('\n');

      const blob = new Blob(['\uFEFF' + csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute(
        'download',
        `eficiencia_picado_completo_${new Date().toISOString().slice(0, 10)}.csv`
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert(`CSV exportado correctamente con ${rows.length} registros ✅`);
    } catch (error) {
      console.error('Error al exportar CSV:', error);
      alert('Error al exportar el archivo CSV. Por favor, intente nuevamente.');
    }
  };

  // Función para exportar a Excel
  const handleExportAllExcel = async () => {
    try {
      const XLSX = await import('xlsx');

      const headers = [
        'Fecha',
        'Máquina',
        'Código Operario',
        'Nombre Operario',
        'Horómetro Inicial',
        'Horómetro Final',
        'Referencia',
        'Paradas Mayores',
        'Observaciones',
        'Horas Asignadas',
        'Horas Trabajadas',
        'Estándar',
        'Estandar en horas',
        'Eficiencia (horas)',
        'Estado',
        'ID Registro'
      ];

      const data = registrosFiltrados.flatMap((reg) =>
        reg.machines
          .filter((m) => !maquinaFiltro || m.machine === maquinaFiltro)
          .map((machine) => {
            const horoFin = parseFloat(machine.horometroFinal) || 0;
            const horoIni = parseFloat(machine.horometroInicial) || 0;
            const totalHoras = horoFin - horoIni;

            const standard = parseFloat(
              machineStandards[machine.machine] || '0'
            );
            const horasAsignadas = parseFloat(machine.horasAsignadas) || 0;

            const eficiencia = totalHoras - standard * horasAsignadas;

            return [
              formatearFecha(reg.fecha),
              machine.machine || 'N/A',
              reg.operatorCode || 'N/A',
              reg.operatorName || 'N/A',
              parseFloat(machine.horometroInicial) || 0,
              parseFloat(machine.horometroFinal) || 0,
              machine.reference || 'N/A',
              parseFloat(machine.paradasMayores) || 0,
              machine.observaciones || '',
              parseFloat(machine.horasAsignadas) || 0,
              totalHoras,
              standard,
              standard * horasAsignadas,
              eficiencia,
              reg.estado || 'Pendiente',
              reg.id || 'N/A'
            ];
          })
      );

      // Crear libro de trabajo y hoja
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);

      // Ajustar el ancho de las columnas
      const colWidths = [
        { wch: 20 }, // Fecha
        { wch: 15 }, // Máquina
        { wch: 18 }, // Código Operario
        { wch: 20 }, // Nombre Operario
        { wch: 15 }, // H. Inicial
        { wch: 15 }, // H. Final
        { wch: 15 }, // Referencia
        { wch: 15 }, // Paradas
        { wch: 30 }, // Observaciones
        { wch: 15 }, // H. Asignadas
        { wch: 15 }, // H. Trabajadas
        { wch: 12 }, // Estándar
        { wch: 15 }, // Estandar horas
        { wch: 15 }, // Eficiencia
        { wch: 12 }, // Estado
        { wch: 20 } // ID Registro
      ];
      ws['!cols'] = colWidths;

      // Agregar la hoja al libro
      XLSX.utils.book_append_sheet(wb, ws, 'Eficiencia Picado');

      // Generar y descargar el archivo
      XLSX.writeFile(
        wb,
        `eficiencia_picado_completo_${new Date().toISOString().slice(0, 10)}.xlsx`
      );

      alert(`Excel exportado correctamente con ${data.length} registros ✅`);
    } catch (error) {
      console.error('Error al exportar Excel:', error);
      alert(
        'Error al exportar el archivo Excel. Por favor, intente nuevamente.'
      );
    }
  };

  // Función para exportar resumen ejecutivo
  const handleExportResumen = () => {
    try {
      const headers = ['Métrica', 'Valor', 'Unidad'];

      const resumenData = [
        ['Total Horas Asignadas', sumaHorasAsignadas.toFixed(2), 'horas'],
        ['Total Horas Trabajadas', sumaHorasTrabajadas.toFixed(2), 'horas'],
        ['Total Estandar en Horas', sumaEstandarHoras1.toFixed(2), 'horas'],
        ['Eficiencia Total', eficienciaHoras.toFixed(2), 'horas'],
        [
          'Porcentaje de Eficiencia',
          `${
            sumaEstandarHoras1 > 0 && !isNaN(sumaHorasTrabajadas)
              ? ((sumaHorasTrabajadas / sumaEstandarHoras1 - 1) * 100).toFixed(
                  2
                )
              : '0.00'
          }%`,
          ''
        ],
        ['Total Registros', registrosFiltrados.length.toString(), ''],
        [
          'Total Ítems',
          registrosFiltrados
            .flatMap((reg) =>
              reg.machines.filter(
                (m) => !maquinaFiltro || m.machine === maquinaFiltro
              )
            )
            .length.toString(),
          ''
        ]
      ];

      const csvContent = [
        headers.join(','),
        ...resumenData.map((row) => row.join(','))
      ].join('\n');

      const blob = new Blob(['\uFEFF' + csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute(
        'download',
        `resumen_eficiencia_picado_${new Date().toISOString().slice(0, 10)}.csv`
      );
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert('Resumen exportado correctamente ✅');
    } catch (error) {
      console.error('Error al exportar resumen:', error);
      alert('Error al exportar el resumen. Por favor, intente nuevamente.');
    }
  };

  // Cálculos totales
  const sumaHorasAsignadas = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const horas = parseFloat(machine.horasAsignadas);
      sum += isNaN(horas) ? 0 : horas;
    });
    return sum;
  }, 0);

  const sumaHorasTrabajadas = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const horoFin = parseFloat(machine.horometroFinal) || 0;
      const horoIni = parseFloat(machine.horometroInicial) || 0;
      sum += horoFin - horoIni;
    });
    return sum;
  }, 0);

  const sumaStandarEsperado = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const horasAsignadas = parseFloat(machine.horasAsignadas);
      const standard = parseFloat(machineStandards[machine.machine] || '0');
      sum += horasAsignadas * standard;
    });
    return sum;
  }, 0);

  const eficienciaHoras = sumaHorasTrabajadas - sumaStandarEsperado;

  const sumaEstandarHoras1 = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const standard = parseFloat(machineStandards[machine.machine] || '0');
      const horasAsignadas = parseFloat(machine.horasAsignadas) || 0;

      if (standard > 0) {
        sum += standard * horasAsignadas;
      }
    });
    return sum;
  }, 0);

  return (
    <div className="p-6 w-full bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-300 shadow-lg overflow-x-auto relative">
      {/* Encabezado y botones */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            📊 Reporte de Eficiencia Picado
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            Análisis detallado de productividad por operario y máquina
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          {puedeEditar() && (
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
              ✏️ Modo Edición ({userRole})
            </span>
          )}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleExportResumen}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2.5 rounded-lg shadow cursor-pointer flex items-center text-sm font-medium transition-all duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resumen CSV
            </button>
            <button
              onClick={handleExportAllCSV}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2.5 rounded-lg shadow cursor-pointer flex items-center text-sm font-medium transition-all duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              CSV Completo
            </button>
            <button
              onClick={handleExportAllExcel}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 rounded-lg shadow cursor-pointer flex items-center text-sm font-medium transition-all duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Excel
            </button>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl mb-6 border border-blue-100 shadow-sm">
        <div className="flex items-center mb-4">
          <svg
            className="w-5 h-5 text-blue-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800">
            Filtros Avanzados
          </h3>
        </div>

        {/* Selector de tipo de filtro de fecha */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de filtro por fecha:
          </label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={!usarRangoFechas}
                onChange={() => setUsarRangoFechas(false)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-800 font-medium">
                Día/Mes Específico
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={usarRangoFechas}
                onChange={() => setUsarRangoFechas(true)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-800 font-medium">
                Rango de Fechas
              </span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Filtro por día (solo visible cuando no se usa rango) */}
          {!usarRangoFechas && (
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Filtrar por día:
              </label>
              <input
                type="date"
                value={fechaFiltro}
                onChange={(e) => setFechaFiltro(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 shadow-sm"
              />
            </div>
          )}

          {/* Filtro por rango de fechas (solo visible cuando se usa rango) */}
          {usarRangoFechas && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Desde:
                </label>
                <input
                  type="datetime-local"
                  value={fechaDesde}
                  onChange={(e) => setFechaDesde(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Hasta:
                </label>
                <input
                  type="datetime-local"
                  value={fechaHasta}
                  onChange={(e) => setFechaHasta(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 shadow-sm"
                />
              </div>
            </>
          )}

          {/* Filtro por máquina */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Filtrar por máquina:
            </label>
            <select
              value={maquinaFiltro}
              onChange={(e) => setMaquinaFiltro(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 shadow-sm"
            >
              <option value="" className="text-gray-500">
                Todas las máquinas
              </option>
              {maquinasUnicas.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* filtro mes (solo visible cuando no se usa rango) */}
          {!usarRangoFechas && (
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Filtrar por mes:
              </label>
              <input
                type="month"
                value={mesFiltro}
                onChange={(e) => setMesFiltro(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 shadow-sm"
              />
            </div>
          )}

          {/* filtro operario */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Filtrar por operario:
            </label>
            <select
              value={filtroOperario}
              onChange={(e) => setFiltroOperario(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-800 shadow-sm"
            >
              <option value="" className="text-gray-500">
                Todos los operarios
              </option>
              {operariosUnicos.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Botón para limpiar filtros */}
        <div className="mt-5 flex justify-end">
          <button
            onClick={limpiarFiltros}
            className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-5 py-2.5 rounded-lg shadow cursor-pointer flex items-center text-sm font-medium transition-all duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Limpiar Filtros
          </button>
        </div>
      </div>

      {/* Tarjetas de totales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {/* Total Horas Asignadas */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl shadow-sm border border-blue-200">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="font-semibold text-blue-800">Horas Asignadas</p>
          </div>
          <p className="text-3xl font-bold text-gray-800">
            {sumaHorasAsignadas.toFixed(2)}
            <span className="text-sm font-normal text-gray-600 ml-1">
              horas
            </span>
          </p>
        </div>

        {/* Total Horas Trabajadas */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl shadow-sm border border-green-200">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="font-semibold text-green-800">Horas Trabajadas</p>
          </div>
          <p className="text-3xl font-bold text-gray-800">
            {sumaHorasTrabajadas.toFixed(2)}
            <span className="text-sm font-normal text-gray-600 ml-1">
              horas
            </span>
          </p>
        </div>

        {/* Estandar en Horas */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm border border-purple-200">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <p className="font-semibold text-purple-800">Estándar en Horas</p>
          </div>
          <p className="text-3xl font-bold text-gray-800">
            {sumaEstandarHoras1.toFixed(2)}
            <span className="text-sm font-normal text-gray-600 ml-1">
              horas
            </span>
          </p>
        </div>

        {/* Eficiencia */}
        <div
          className={`bg-gradient-to-br p-5 rounded-xl shadow-sm border ${eficienciaHoras >= 0 ? 'from-green-50 to-green-100 border-green-200' : 'from-red-50 to-red-100 border-red-200'}`}
        >
          <div className="flex items-center mb-3">
            <div
              className={`w-10 h-10 ${eficienciaHoras >= 0 ? 'bg-green-500' : 'bg-red-500'} rounded-lg flex items-center justify-center mr-3`}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <p
              className={`font-semibold ${eficienciaHoras >= 0 ? 'text-green-800' : 'text-red-800'}`}
            >
              Eficiencia Total
            </p>
          </div>
          <p
            className={`text-3xl font-bold ${eficienciaHoras >= 0 ? 'text-green-600' : 'text-red-600'}`}
          >
            {eficienciaHoras >= 0 ? '+' : ''}
            {eficienciaHoras.toFixed(2)}
            <span className="text-sm font-normal text-gray-600 ml-1">
              horas
            </span>
          </p>
          <p className="text-sm mt-2 text-gray-700">
            <strong>
              Porcentaje:{' '}
              {sumaEstandarHoras1 > 0 && !isNaN(sumaHorasTrabajadas)
                ? (
                    (sumaHorasTrabajadas / sumaEstandarHoras1 - 1) *
                    100
                  ).toFixed(2)
                : '0.00'}
              %
            </strong>
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <span className="text-sm font-semibold text-gray-700">
              Total registros:
            </span>
            <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
              {registrosFiltrados.length}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-semibold text-gray-700">
              Total ítems:
            </span>
            <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
              {
                registrosFiltrados.flatMap((reg) =>
                  reg.machines.filter(
                    (m) => !maquinaFiltro || m.machine === maquinaFiltro
                  )
                ).length
              }
            </span>
          </div>
          {usarRangoFechas && (fechaDesde || fechaHasta) && (
            <div className="flex items-center">
              <span className="text-sm font-semibold text-gray-700">
                Rango:
              </span>
              <span className="ml-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                {fechaDesde ? formatearFecha(fechaDesde) : 'Inicio'} →{' '}
                {fechaHasta ? formatearFecha(fechaHasta) : 'Fin'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Componente RaceOperator */}
      <RaceOperator
        registrosFiltrados={registrosFiltrados}
        machineStandards={machineStandards}
      />

      {/* Tabla */}
      <div className="mt-8">
        <div className="flex items-center mb-4">
          <svg
            className="w-5 h-5 text-gray-700 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800">
            Detalle de Registros
          </h3>
        </div>

        <div
          className="overflow-x-auto w-full rounded-xl border border-gray-300 shadow-sm bg-white"
          style={{ maxHeight: '70vh' }}
        >
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            {/* Encabezado fijo */}
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  📅 Fecha
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  🏭 Máquina
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  👤 Operario
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  🔰 H. Inicial
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  🏁 H. Final
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  📋 Referencia
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  ⏰ Paradas
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  📝 Obs.
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  ⏱️ H. Asignadas
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  📊 H. Trabajadas
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  📈 Estándar H.
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  🎯 Estándar
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  📉 Eficiencia
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-r border-gray-300">
                  🏷️ Estado
                </th>
                <th className="px-5 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  ⚙️ Acciones
                </th>
              </tr>
            </thead>

            {/* Cuerpo */}
            <tbody className="bg-white divide-y divide-gray-200">
              {registrosFiltrados.map((reg) => (
                <>
                  {/* Encabezado del registro */}
                  <tr
                    key={`header-${reg.id}`}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t-2 border-blue-300"
                  >
                    <td
                      className="px-5 py-3 font-semibold text-gray-800"
                      colSpan={14}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-blue-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="font-bold">
                            {formatearFecha(reg.fecha)}
                          </span>
                          <span className="mx-2 text-gray-500">•</span>
                          <span className="text-gray-700">
                            Operario: {reg.operatorCode} - {reg.operatorName}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                              reg.estado === 'Revisado'
                                ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border border-green-300'
                                : reg.estado === 'Rechazado'
                                  ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border border-red-300'
                                  : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300'
                            }`}
                          >
                            {reg.estado || 'Pendiente'}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      {puedeEditar() && (
                        <button
                          onClick={() =>
                            abrirModalEdicion(
                              reg.id,
                              0,
                              'fecha',
                              {
                                horasAsignadas: '',
                                horometroFinal: '',
                                horometroInicial: '',
                                machine: '',
                                reference: '',
                                paradasMayores: '',
                                observaciones: ''
                              },
                              reg.fecha
                            )
                          }
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition-all duration-200"
                        >
                          Editar Fecha
                        </button>
                      )}
                    </td>
                  </tr>

                  {/* Filas de máquinas */}
                  {reg.machines
                    .filter(
                      (m) => !maquinaFiltro || m.machine === maquinaFiltro
                    )
                    .map((machine, index) => {
                      const horoFin = parseFloat(machine.horometroFinal);
                      const horoIni = parseFloat(machine.horometroInicial);
                      const totalHoras =
                        isNaN(horoFin) || isNaN(horoIni)
                          ? 0
                          : horoFin - horoIni;

                      const standardStr =
                        machineStandards[machine.machine] ?? '0';
                      const standard = parseFloat(standardStr);
                      const horasAsignadas = parseFloat(machine.horasAsignadas);

                      let eficiencia = 0;
                      if (
                        !isNaN(totalHoras) &&
                        !isNaN(standard) &&
                        !isNaN(horasAsignadas)
                      ) {
                        eficiencia = totalHoras - standard * horasAsignadas;
                      }

                      let rowClass = '';
                      if (eficiencia > 0) {
                        rowClass =
                          'bg-gradient-to-r from-green-50/50 to-emerald-50/50';
                      } else if (eficiencia <= 0 && eficiencia > -1) {
                        rowClass =
                          'bg-gradient-to-r from-yellow-50/50 to-amber-50/50';
                      } else if (eficiencia <= -1 && eficiencia >= -100) {
                        rowClass =
                          'bg-gradient-to-r from-red-50/50 to-rose-50/50';
                      }

                      return (
                        <tr
                          key={`${reg.id}-${index}`}
                          className={`hover:bg-gray-50/80 ${rowClass} transition-colors duration-150`}
                        >
                          {/* Fecha */}
                          <td className="px-5 py-3 whitespace-nowrap text-gray-700 font-medium border-r border-gray-100">
                            {formatearFecha(reg.fecha)}
                          </td>

                          {/* Máquina */}
                          <td className="px-5 py-3 whitespace-nowrap text-gray-800 font-medium border-r border-gray-100">
                            <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                              {machine.machine}
                            </span>
                          </td>

                          {/* Operario */}
                          <td className="px-5 py-3 whitespace-nowrap text-gray-700 border-r border-gray-100">
                            <span className="font-medium">
                              {reg.operatorCode}
                            </span>
                          </td>

                          {/* Horómetro inicial */}
                          <td className="px-5 py-3 whitespace-nowrap text-gray-800 border-r border-gray-100">
                            <span className="bg-blue-50 px-2 py-1 rounded border border-blue-100">
                              {parseFloat(machine.horometroInicial).toFixed(2)}
                            </span>
                          </td>

                          {/* Horómetro final */}
                          <td className="px-5 py-3 whitespace-nowrap text-gray-800 border-r border-gray-100">
                            <span className="bg-green-50 px-2 py-1 rounded border border-green-100">
                              {parseFloat(machine.horometroFinal).toFixed(2)}
                            </span>
                          </td>

                          {/* Referencia */}
                          <td className="px-5 py-3 whitespace-nowrap text-gray-700 border-r border-gray-100">
                            <span className="px-2 py-1 bg-purple-50 rounded text-sm border border-purple-100">
                              {machine.reference || 'N/A'}
                            </span>
                          </td>

                          {/* Paradas mayores */}
                          <td className="px-5 py-3 whitespace-nowrap text-gray-700 border-r border-gray-100">
                            <span className="px-2 py-1 bg-orange-50 rounded text-sm border border-orange-100">
                              {machine.paradasMayores || '0.00'}
                            </span>
                          </td>

                          {/* Observaciones */}
                          <td className="px-5 py-3 border-r border-gray-100">
                            <div
                              className="max-w-xs truncate text-gray-700"
                              title={machine.observaciones}
                            >
                              {machine.observaciones || '-'}
                            </div>
                          </td>

                          {/* Horas asignadas */}
                          <td className="px-5 py-3 whitespace-nowrap border-r border-gray-100">
                            <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg font-semibold">
                              {mostrarHoras(machine.horasAsignadas)}
                            </span>
                          </td>

                          {/* Horas trabajadas */}
                          <td className="px-5 py-3 whitespace-nowrap border-r border-gray-100">
                            <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg font-semibold">
                              {totalHoras.toFixed(2)}
                            </span>
                          </td>

                          {/* Estándar en horas */}
                          <td className="px-5 py-3 whitespace-nowrap border-r border-gray-100">
                            <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded font-medium">
                              {machineStandards[machine.machine] &&
                              parseFloat(machineStandards[machine.machine]) > 0
                                ? (
                                    parseFloat(
                                      machineStandards[machine.machine] || '0'
                                    ) * parseFloat(machine.horasAsignadas)
                                  ).toFixed(2)
                                : 'N/A'}
                            </span>
                          </td>

                          {/* Estándar */}
                          <td className="px-5 py-3 whitespace-nowrap border-r border-gray-100">
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded font-medium">
                              {machineStandards[machine.machine] ?? 'N/A'}
                            </span>
                          </td>

                          {/* Eficiencia */}
                          <td className="px-5 py-3 whitespace-nowrap border-r border-gray-100">
                            <span
                              className={`px-3 py-1.5 rounded-lg font-bold ${
                                eficiencia >= 0
                                  ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200'
                                  : 'bg-gradient-to-r from-red-100 to-rose-100 text-red-700 border border-red-200'
                              }`}
                            >
                              {eficiencia >= 0 ? '+' : ''}
                              {eficiencia.toFixed(2)}
                            </span>
                          </td>

                          {/* Estado */}
                          <td className="px-5 py-3 whitespace-nowrap border-r border-gray-100">
                            <span
                              className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                                reg.estado === 'Revisado'
                                  ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
                                  : reg.estado === 'Rechazado'
                                    ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-800'
                                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'
                              }`}
                            >
                              {reg.estado || 'Pendiente'}
                            </span>
                          </td>

                          {/* Acciones */}
                          <td className="px-5 py-3">
                            {puedeEditar() && (
                              <div className="grid grid-cols-2 gap-1">
                                <button
                                  onClick={() =>
                                    abrirModalEdicion(
                                      reg.id,
                                      index,
                                      'horometroInicial',
                                      machine,
                                      reg.fecha
                                    )
                                  }
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
                                >
                                  H. Inicial
                                </button>
                                <button
                                  onClick={() =>
                                    abrirModalEdicion(
                                      reg.id,
                                      index,
                                      'horometroFinal',
                                      machine,
                                      reg.fecha
                                    )
                                  }
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
                                >
                                  H. Final
                                </button>
                                <button
                                  onClick={() =>
                                    abrirModalEdicion(
                                      reg.id,
                                      index,
                                      'horasAsignadas',
                                      machine,
                                      reg.fecha
                                    )
                                  }
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
                                >
                                  H. Asignadas
                                </button>
                                <button
                                  onClick={() =>
                                    abrirModalEdicion(
                                      reg.id,
                                      index,
                                      'reference',
                                      machine,
                                      reg.fecha
                                    )
                                  }
                                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
                                >
                                  Referencia
                                </button>
                                <button
                                  onClick={() =>
                                    abrirModalEdicion(
                                      reg.id,
                                      index,
                                      'paradasMayores',
                                      machine,
                                      reg.fecha
                                    )
                                  }
                                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
                                >
                                  Paradas
                                </button>
                                <button
                                  onClick={() =>
                                    abrirModalEdicion(
                                      reg.id,
                                      index,
                                      'observaciones',
                                      machine,
                                      reg.fecha
                                    )
                                  }
                                  className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-2 py-1.5 rounded text-xs font-medium transition-all duration-200"
                                >
                                  Obs.
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de edición */}
      {modalAbierto && edicionActual && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-7 rounded-2xl shadow-2xl w-full max-w-md border border-gray-300">
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Editar{' '}
                {edicionActual.campo === 'fecha'
                  ? 'Fecha'
                  : edicionActual.campo}
              </h3>
            </div>

            {edicionActual.campo === 'fecha' ? (
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Nueva fecha:
                </label>
                <input
                  type="datetime-local"
                  value={
                    editValues.fecha
                      ? new Date(editValues.fecha).toISOString().slice(0, 16)
                      : ''
                  }
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      fecha: e.target.value
                    }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-800"
                />
              </div>
            ) : (
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Nuevo valor para{' '}
                  <span className="font-bold">{edicionActual.campo}</span>:
                </label>
                {edicionActual.campo === 'observaciones' ? (
                  <textarea
                    value={
                      editValues[
                        edicionActual.campo as keyof Omit<EditValues, 'fecha'>
                      ] as string
                    }
                    onChange={(e) =>
                      setEditValues((prev) => ({
                        ...prev,
                        [edicionActual.campo]: e.target.value
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-800"
                    rows={4}
                    placeholder="Ingrese las observaciones..."
                  />
                ) : (
                  <input
                    type={
                      [
                        'horometroInicial',
                        'horometroFinal',
                        'horasAsignadas',
                        'paradasMayores'
                      ].includes(edicionActual.campo)
                        ? 'number'
                        : 'text'
                    }
                    step="0.01"
                    value={
                      editValues[
                        edicionActual.campo as keyof Omit<EditValues, 'fecha'>
                      ] as string
                    }
                    onChange={(e) =>
                      setEditValues((prev) => ({
                        ...prev,
                        [edicionActual.campo]: e.target.value
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-gray-800"
                    placeholder={`Ingrese el valor para ${edicionActual.campo}`}
                  />
                )}
              </div>
            )}

            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                onClick={cerrarModal}
                className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200"
              >
                Cancelar
              </button>
              <button
                onClick={() => actualizarCampo(edicionActual.campo)}
                disabled={cargando}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {cargando ? '⏳ Actualizando...' : '💾 Actualizar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EficencePicado;
