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
      if (fechaFiltro) {
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
      if (mesFiltro) {
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
    <div className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-lg overflow-x-auto relative">
      {/* Encabezado y botones */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Reporte de Eficiencia Picado
        </h2>
        <div className="flex items-center space-x-2">
          {puedeEditar() && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              Modo Edición ({userRole})
            </span>
          )}
          <div className="flex space-x-2">
            <button
              onClick={handleExportResumen}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer flex items-center text-sm"
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
              Resumen
            </button>
            <button
              onClick={handleExportAllCSV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer flex items-center text-sm"
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
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer flex items-center text-sm"
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
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Filtros</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Filtro por día */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por día:
            </label>
            <input
              type="date"
              value={fechaFiltro}
              onChange={(e) => setFechaFiltro(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filtro por máquina */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por máquina:
            </label>
            <select
              value={maquinaFiltro}
              onChange={(e) => setMaquinaFiltro(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todas las máquinas</option>
              {maquinasUnicas.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* filtro mes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por mes:
            </label>
            <input
              type="month"
              value={mesFiltro}
              onChange={(e) => setMesFiltro(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* filtro operario */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por operario:
            </label>
            <select
              value={filtroOperario}
              onChange={(e) => setFiltroOperario(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todos los operarios</option>
              {operariosUnicos.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tarjetas de totales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Horas Asignadas */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200">
          <p className="font-semibold text-blue-800 text-sm">
            Total Horas Asignadas
          </p>
          <p className="text-2xl font-bold text-blue-600">
            {sumaHorasAsignadas.toFixed(2)} horas
          </p>
        </div>
        {/* Total Horas Trabajadas */}
        <div className="bg-green-100 p-4 rounded-lg shadow-sm border border-green-200">
          <p className="font-semibold text-green-800 text-sm">
            Total Horas Trabajadas
          </p>
          <p className="text-2xl font-bold text-green-600">
            {sumaHorasTrabajadas.toFixed(2)} horas
          </p>
        </div>
        {/* Estandar en Horas */}
        <div className="bg-purple-100 p-4 rounded-lg shadow-sm border border-purple-200">
          <p className="font-semibold text-purple-800 text-sm">
            Total Estandar en Horas
          </p>
          <p className="text-2xl font-bold text-purple-600">
            {sumaEstandarHoras1.toFixed(2)} horas
          </p>
        </div>
        {/* Eficiencia */}
        <div
          className={`p-4 rounded-lg shadow-sm border ${
            eficienciaHoras >= 0
              ? 'bg-green-100 border-green-200'
              : 'bg-red-100 border-red-200'
          }`}
        >
          <p className="font-semibold text-sm">Eficiencia Total</p>
          <p
            className={`text-2xl font-bold ${
              eficienciaHoras >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {eficienciaHoras.toFixed(2)} horas
          </p>
          <p className="text-sm mt-1">
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
      <p className="mb-4 text-sm text-gray-600 bg-gray-100 p-2 rounded-lg">
        Total de registros: {registrosFiltrados.length} | Total de ítems:{' '}
        {
          registrosFiltrados.flatMap((reg) =>
            reg.machines.filter(
              (m) => !maquinaFiltro || m.machine === maquinaFiltro
            )
          ).length
        }
      </p>

      {/* Componente RaceOperator */}
      <RaceOperator
        registrosFiltrados={registrosFiltrados}
        machineStandards={machineStandards}
      />

      {/* Tabla */}
      <div
        className="overflow-x-auto w-full rounded-lg border border-gray-200 shadow-sm"
        style={{ maxHeight: '70vh' }}
      >
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          {/* Encabezado fijo */}
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Máquina
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Operario
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                H. Inicial
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                H. Final
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Referencia
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Paradas
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Obs.
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                H. Asignadas
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                H. Trabajadas
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estandar H.
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estandar
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Eficiencia
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          {/* Cuerpo */}
          <tbody className="bg-white divide-y divide-gray-200">
            {registrosFiltrados.map((reg) => (
              <>
                {/* Encabezado del registro */}
                <tr key={`header-${reg.id}`} className="bg-blue-50">
                  <td
                    className="px-4 py-3 font-medium text-blue-800"
                    colSpan={14}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        Registro: {formatearFecha(reg.fecha)} - Operario:{' '}
                        {reg.operatorCode} - {reg.operatorName}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            reg.estado === 'Revisado'
                              ? 'bg-green-100 text-green-800'
                              : reg.estado === 'Rechazado'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {reg.estado || 'Pendiente'}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
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
                        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                      >
                        Editar Fecha
                      </button>
                    )}
                  </td>
                </tr>
                {/* Filas de máquinas */}
                {reg.machines
                  .filter((m) => !maquinaFiltro || m.machine === maquinaFiltro)
                  .map((machine, index) => {
                    const horoFin = parseFloat(machine.horometroFinal);
                    const horoIni = parseFloat(machine.horometroInicial);
                    const totalHoras =
                      isNaN(horoFin) || isNaN(horoIni) ? 0 : horoFin - horoIni;

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
                      rowClass = 'bg-green-50';
                    } else if (eficiencia <= 0 && eficiencia > -1) {
                      rowClass = 'bg-yellow-50';
                    } else if (eficiencia <= -1 && eficiencia >= -100) {
                      rowClass = 'bg-red-50';
                    }

                    return (
                      <tr
                        key={`${reg.id}-${index}`}
                        className={`hover:bg-gray-50 ${rowClass}`}
                      >
                        {/* Fecha */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {formatearFecha(reg.fecha)}
                        </td>
                        {/* Máquina */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {machine.machine}
                        </td>
                        {/* Operario */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {reg.operatorCode}
                        </td>
                        {/* Horómetro inicial */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {parseFloat(machine.horometroInicial).toFixed(2)}
                        </td>
                        {/* Horómetro final */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {parseFloat(machine.horometroFinal).toFixed(2)}
                        </td>
                        {/* Referencia */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {machine.reference || 'N/A'}
                        </td>
                        {/* Paradas mayores */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {machine.paradasMayores || '0.00'}
                        </td>
                        {/* Observaciones */}
                        <td className="px-4 py-3">
                          <div
                            className="max-w-xs truncate"
                            title={machine.observaciones}
                          >
                            {machine.observaciones}
                          </div>
                        </td>
                        {/* Horas asignadas */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {mostrarHoras(machine.horasAsignadas)}
                        </td>
                        {/* Horas trabajadas */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {totalHoras.toFixed(2)}
                        </td>
                        {/* Estándar en horas */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {machineStandards[machine.machine] &&
                          parseFloat(machineStandards[machine.machine]) > 0
                            ? (
                                parseFloat(
                                  machineStandards[machine.machine] || '0'
                                ) * parseFloat(machine.horasAsignadas)
                              ).toFixed(2)
                            : 'N/A'}
                        </td>
                        {/* Estándar */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {machineStandards[machine.machine] ?? 'N/A'}
                        </td>
                        {/* Eficiencia */}
                        <td className="px-4 py-3 whitespace-nowrap font-medium">
                          <span
                            className={
                              eficiencia >= 0
                                ? 'text-green-600'
                                : 'text-red-600'
                            }
                          >
                            {eficiencia.toFixed(2)}
                          </span>
                        </td>
                        {/* Estado */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              reg.estado === 'Revisado'
                                ? 'bg-green-100 text-green-800'
                                : reg.estado === 'Rechazado'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {reg.estado || 'Pendiente'}
                          </span>
                        </td>
                        {/* Acciones */}
                        <td className="px-4 py-3 whitespace-nowrap">
                          {puedeEditar() && (
                            <div className="flex flex-col space-y-1">
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
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                              >
                                Editar H. Inicial
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
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                              >
                                Editar H. Final
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
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                              >
                                Editar H. Asignadas
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
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                              >
                                Editar Referencia
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
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                              >
                                Editar Paradas
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
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                              >
                                Editar Obs.
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

      {/* Modal de edición */}
      {modalAbierto && edicionActual && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Editar{' '}
              {edicionActual.campo === 'fecha' ? 'Fecha' : edicionActual.campo}
            </h3>

            {edicionActual.campo === 'fecha' ? (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ) : (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nuevo valor para {edicionActual.campo}:
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
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
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
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            )}

            <div className="flex justify-end space-x-3">
              <button
                onClick={cerrarModal}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={() => actualizarCampo(edicionActual.campo)}
                disabled={cargando}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {cargando ? 'Actualizando...' : 'Actualizar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EficencePicado;
