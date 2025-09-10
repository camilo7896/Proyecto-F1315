import {
  collection,
  getDocs,
  getFirestore,
  updateDoc,
  doc
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import RaceOperator from '../Race';
import app from '../../lib/credentialFirebase';

const db = getFirestore(app);

// Tipos mejorados
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
}

// Componente Principal
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
  const [editando, setEditando] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<EditValues>({
    horometroInicial: '',
    horometroFinal: '',
    horasAsignadas: '',
    reference: '',
    paradasMayores: '',
    observaciones: ''
  });
  const [cargando, setCargando] = useState<boolean>(false);

  // Carga datos y estándares
  const fetchMachineStandards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'machines'));
      const standards: MachineStandards = {};
      querySnapshot.forEach((doc) => {
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

  const formatearFecha = (fechaISO: string) => {
    if (!fechaISO) return '';
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'registro_horometros')
        );
        const data: Registro[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Registro, 'id'>),
          timestamp: doc.data().timestamp || doc.data().fecha
        }));
        setRegistros(data);
      } catch (error) {
        console.error('Error fetching registros:', error);
      }
    };
    fetchData();
    fetchMachineStandards();
  }, []);

  const operarios = Array.from(new Set(registros.map((r) => r.operatorCode)));

  // Función para activar la edición
  const activarEdicion = (registroId: string, machineIndex: number) => {
    const registro = registros.find((r) => r.id === registroId);
    if (registro && registro.machines[machineIndex]) {
      const machine = registro.machines[machineIndex];
      setEditValues({
        horometroInicial: machine.horometroInicial || '',
        horometroFinal: machine.horometroFinal || '',
        horasAsignadas: machine.horasAsignadas || '',
        reference: machine.reference || '',
        paradasMayores: machine.paradasMayores || '',
        observaciones: machine.observaciones || ''
      });
      setEditando(`${registroId}-${machineIndex}`);
    }
  };

  // Función para cancelar edición
  const cancelarEdicion = () => {
    setEditando(null);
    setEditValues({
      horometroInicial: '',
      horometroFinal: '',
      horasAsignadas: '',
      reference: '',
      paradasMayores: '',
      observaciones: ''
    });
  };

  // Función para manejar cambios en los campos editables
  const handleEditChange = (field: keyof EditValues, value: string) => {
    setEditValues((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // Función para guardar cambios en Firebase
  const guardarCambios = async (registroId: string, machineIndex: number) => {
    setCargando(true);
    try {
      const registroRef = doc(db, 'registro_horometros', registroId);
      const registroActual = registros.find((r) => r.id === registroId);

      if (!registroActual) {
        throw new Error('Registro no encontrado');
      }

      // Crear copia actualizada de las máquinas
      const machinesActualizadas = [...registroActual.machines];
      machinesActualizadas[machineIndex] = {
        ...machinesActualizadas[machineIndex],
        ...editValues
      };

      // Actualizar el documento en Firebase
      await updateDoc(registroRef, {
        machines: machinesActualizadas,
        updatedAt: new Date().toISOString()
      });

      // Actualizar el estado local
      setRegistros((prev) =>
        prev.map((reg) =>
          reg.id === registroId
            ? {
                ...reg,
                machines: machinesActualizadas
              }
            : reg
        )
      );

      // Salir del modo edición
      cancelarEdicion();
      alert('Cambios guardados correctamente ✅');
    } catch (error) {
      console.error('Error al guardar cambios:', error);
      alert('Error al guardar los cambios. Por favor, intente nuevamente.');
    } finally {
      setCargando(false);
    }
  };

  const registrosFiltrados = registros
    .filter((reg) => {
      if (fechaFiltro) {
        const fecha = new Date(reg.fecha);
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
    .sort((a, b) => {
      const timestampA = a.timestamp
        ? new Date(a.timestamp).getTime()
        : new Date(a.fecha).getTime();
      const timestampB = b.timestamp
        ? new Date(b.timestamp).getTime()
        : new Date(b.fecha).getTime();
      return timestampB - timestampA;
    })
    .filter((reg) => {
      if (mesFiltro) {
        const regMes = reg.fecha.slice(0, 7);
        return regMes === mesFiltro;
      }
      return true;
    });

  const mostrarHoras = (valor: string) => {
    const num = parseFloat(valor);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  const handleExportAllCSV = () => {
    const headers = [
      'Fecha',
      'Máquina',
      'Código Operario',
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
      'Estado'
    ];

    const rows = registrosFiltrados.flatMap((reg) =>
      reg.machines
        .filter((m) => !maquinaFiltro || m.machine === maquinaFiltro)
        .map((machine) => {
          const horoFin = parseFloat(machine.horometroFinal) || 0;
          const horoIni = parseFloat(machine.horometroInicial) || 0;
          const totalHoras = horoFin - horoIni;

          const standard = parseFloat(machineStandards[machine.machine] || '0');
          const horasAsignadas = parseFloat(machine.horasAsignadas) || 0;

          const eficiencia = totalHoras - standard * horasAsignadas;

          return {
            Fecha: formatearFecha(reg.fecha),
            Máquina: machine.machine,
            'Código Operario': reg.operatorCode,
            'Horómetro Inicial': machine.horometroInicial || '0.00',
            'Horómetro Final': machine.horometroFinal || '0.00',
            Referencia: machine.reference || 'N/A',
            'Paradas Mayores': machine.paradasMayores || '0.00',
            Observaciones: machine.observaciones || '',
            'Horas Asignadas': mostrarHoras(machine.horasAsignadas || '0'),
            'Horas Trabajadas': totalHoras.toFixed(2),
            Estándar: standard,
            'Estandar en horas': (standard * horasAsignadas).toFixed(2),
            'Eficiencia (horas)': eficiencia.toFixed(2),
            Estado: reg.estado || 'Pendiente'
          };
        })
    );

    // Crear CSV
    const csvContent = [
      headers.join(','),
      ...rows.map((row) =>
        headers
          .map((header) => {
            const value = row[header as keyof typeof row];
            const isNumeric = [
              'Horómetro Inicial',
              'Horómetro Final',
              'Paradas Mayores',
              'Horas Asignadas',
              'Horas Trabajadas',
              'Estándar',
              'Estandar en horas',
              'Eficiencia (horas)'
            ].includes(header);

            if (isNumeric) {
              return String(value);
            }

            return `"${String(value || '').replace(/"/g, '""')}"`;
          })
          .join(',')
      )
    ].join('\n');

    // Descargar
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `eficiencia_picado_${new Date().toISOString().slice(0, 10)}.csv`
    );
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calcular sumas totales
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
    <>
      <div className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-lg overflow-x-auto relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Reporte de Eficiencia Picado
          </h2>
          <button
            onClick={handleExportAllCSV}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow cursor-pointer flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Exportar CSV
          </button>
        </div>

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
                {Array.from(
                  new Set(
                    registros.flatMap((reg) =>
                      reg.machines.map((m) => m.machine)
                    )
                  )
                ).map((m) => (
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
                {operarios.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Horas Asignadas */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200">
            <p className="font-semibold text-blue-800 text-sm">
              Total Horas Asignadas
            </p>
            <p className="text-2xl font-bold text-blue-600">
              {sumaHorasAsignadas.toFixed(2)} horas
            </p>
          </div>

          {/* Horas Trabajadas */}
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
              className={`text-2xl font-bold ${eficienciaHoras >= 0 ? 'text-green-600' : 'text-red-600'}`}
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

        <RaceOperator
          registrosFiltrados={registrosFiltrados}
          machineStandards={machineStandards}
        />

        {/* Tabla con encabezado fijo */}
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
                  {/* Fila de encabezado del registro */}
                  <tr key={`header-${reg.id}`} className="bg-blue-50">
                    <td
                      colSpan={15}
                      className="px-4 py-3 font-medium text-blue-800"
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
                  </tr>

                  {/* Filas de máquinas */}
                  {reg.machines
                    .filter(
                      (m) => !maquinaFiltro || m.machine === maquinaFiltro
                    )
                    .map((machine, index) => {
                      const editKey = `${reg.id}-${index}`;
                      const estaEditando = editando === editKey;

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
                          {/* Fecha y hora */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {formatearFecha(reg.fecha)}
                          </td>

                          <td className="px-4 py-3 whitespace-nowrap">
                            {machine.machine}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {reg.operatorCode}
                          </td>

                          {/* Horómetro inicial */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {estaEditando ? (
                              <input
                                type="number"
                                step="0.01"
                                value={editValues.horometroInicial}
                                onChange={(e) =>
                                  handleEditChange(
                                    'horometroInicial',
                                    e.target.value
                                  )
                                }
                                className="w-20 border border-gray-300 rounded px-2 py-1"
                              />
                            ) : machine.horometroInicial &&
                              machine.horometroInicial.trim() !== '' ? (
                              parseFloat(machine.horometroInicial).toFixed(2)
                            ) : (
                              '0.00'
                            )}
                          </td>

                          {/* Horómetro final */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {estaEditando ? (
                              <input
                                type="number"
                                step="0.01"
                                value={editValues.horometroFinal}
                                onChange={(e) =>
                                  handleEditChange(
                                    'horometroFinal',
                                    e.target.value
                                  )
                                }
                                className="w-20 border border-gray-300 rounded px-2 py-1"
                              />
                            ) : machine.horometroFinal &&
                              machine.horometroFinal.trim() !== '' ? (
                              parseFloat(machine.horometroFinal).toFixed(2)
                            ) : (
                              '0.00'
                            )}
                          </td>

                          {/* Referencia */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {estaEditando ? (
                              <input
                                type="text"
                                value={editValues.reference}
                                onChange={(e) =>
                                  handleEditChange('reference', e.target.value)
                                }
                                className="w-24 border border-gray-300 rounded px-2 py-1"
                              />
                            ) : machine.reference ? (
                              machine.reference
                            ) : (
                              'N/A'
                            )}
                          </td>

                          {/* Paradas mayores */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {estaEditando ? (
                              <input
                                type="number"
                                step="0.01"
                                value={editValues.paradasMayores}
                                onChange={(e) =>
                                  handleEditChange(
                                    'paradasMayores',
                                    e.target.value
                                  )
                                }
                                className="w-20 border border-gray-300 rounded px-2 py-1"
                              />
                            ) : machine.paradasMayores &&
                              machine.paradasMayores.trim() !== '' ? (
                              machine.paradasMayores
                            ) : (
                              '0.00'
                            )}
                          </td>

                          {/* Observaciones */}
                          <td className="px-4 py-3">
                            {estaEditando ? (
                              <textarea
                                value={editValues.observaciones}
                                onChange={(e) =>
                                  handleEditChange(
                                    'observaciones',
                                    e.target.value
                                  )
                                }
                                className="w-32 border border-gray-300 rounded px-2 py-1"
                                rows={2}
                              />
                            ) : (
                              <div
                                className="max-w-xs truncate"
                                title={machine.observaciones}
                              >
                                {machine.observaciones}
                              </div>
                            )}
                          </td>

                          {/* Horas asignadas */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {estaEditando ? (
                              <input
                                type="number"
                                step="0.01"
                                value={editValues.horasAsignadas}
                                onChange={(e) =>
                                  handleEditChange(
                                    'horasAsignadas',
                                    e.target.value
                                  )
                                }
                                className="w-20 border border-gray-300 rounded px-2 py-1"
                              />
                            ) : (
                              mostrarHoras(machine.horasAsignadas)
                            )}
                          </td>

                          {/* Horas trabajadas */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {totalHoras.toFixed(2)}
                          </td>

                          {/* Standar x Horas */}
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

                          {/* Stand */}
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
                            {estaEditando ? (
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => guardarCambios(reg.id, index)}
                                  disabled={cargando}
                                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                                >
                                  {cargando ? 'Guardando...' : 'Guardar'}
                                </button>
                                <button
                                  onClick={cancelarEdicion}
                                  className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs"
                                >
                                  Cancelar
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => activarEdicion(reg.id, index)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                              >
                                Editar
                              </button>
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
    </>
  );
};

export default EficencePicado;
