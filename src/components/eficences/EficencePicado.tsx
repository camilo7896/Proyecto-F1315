import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc,
  deleteDoc,
  type DocumentData
} from 'firebase/firestore';
import {
  getAuth,
  reauthenticateWithCredential,
  EmailAuthProvider
} from 'firebase/auth';

import app from '../../lib/credentialFirebase';
import { useEffect, useState, useCallback } from 'react';
import RaceOperator from '../Race';

const db = getFirestore(app);
const auth = getAuth();

type Machine = {
  horasAsignadas: string | number;
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
  reference: string;
  paradasMayores: string;
  observaciones: string;
  fechaHora?: string;
};

type Registro = {
  id: string;
  fecha: string;
  operatorCode: string;
  operatorName: string;
  machines: Machine[];
  totalHours?: string;
  editadoPor?: string;
  camposModificados?: string;
  fechaUltimaEdicion?: string;
  originalMachines?: Machine[];
  detallesEdicion?: {
    usuario: string;
    fechaHora: string;
    valorAnterior: Partial<Machine>;
    valorNuevo: Partial<Machine>;
  }[];
  estado?: string;
  timestamp?: string; // Nuevo campo para ordenamiento
};

type PasswordModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (password: string) => void;
};

const PasswordModal: React.FC<PasswordModalProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(password);
    setPassword('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold mb-4">
          Verificación de contraseña
        </h3>
        <p className="mb-4">
          Por favor ingrese su contraseña para confirmar la eliminación:
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          placeholder="Ingrese su contraseña"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

const EficencePicado: React.FC<{ editable?: boolean }> = ({
  editable = false
}) => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Machine>>({});
  const [editHoras, setEditHoras] = useState<string>('');
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [selectedRegId, setSelectedRegId] = useState<string | null>(null);

  // modal de quien edito
  const [modalVisible, setModalVisible] = useState(false);
  const [registroDetalleModal, setRegistroDetalleModal] =
    useState<Registro | null>(null);

  const handleMostrarDetalles = (reg: Registro) => {
    setRegistroDetalleModal(reg);
    setModalVisible(true);
  };

  const handleCerrarModal = () => {
    setModalVisible(false);
    setRegistroDetalleModal(null);
  };

  // *********************************************

  const [fechaFiltro, setFechaFiltro] = useState<string>('');
  const [maquinaFiltro, setMaquinaFiltro] = useState<string>('');
  const [machineStandards, setMachineStandards] = useState<
    Record<string, string>
  >({});
  const [mesFiltro, setMesFiltro] = useState<string>(() => {
    const ahora = new Date();
    return ahora.toISOString().slice(0, 7);
  });
  const [filtroOperario, setFiltroOperario] = useState<string>('');

  // Obtener email del usuario logueado
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setCurrentUserEmail(user.email);
    }
  }, []);

  // Carga datos y estándares
  const fetchMachineStandards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'machines'));
      const standards: Record<string, string> = {};
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
          // Incluimos el timestamp si existe en el documento
          timestamp: doc.data().timestamp || doc.data().fecha // Usamos fecha como fallback
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
    // Ordenar por timestamp (más reciente primero)
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

  const sumaEficienciaTotal = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const horoFin = parseFloat(machine.horometroFinal);
      const horoIni = parseFloat(machine.horometroInicial);
      const totalHoras =
        isNaN(horoFin) || isNaN(horoIni) ? 0 : horoFin - horoIni;

      const standardStr = machineStandards[machine.machine] ?? '0';
      const standard = parseFloat(standardStr);
      const horasAsignadas =
        typeof machine.horasAsignadas === 'string'
          ? parseFloat(machine.horasAsignadas)
          : machine.horasAsignadas;

      if (!isNaN(totalHoras) && !isNaN(standard) && !isNaN(horasAsignadas)) {
        const eficiencia = totalHoras - standard * horasAsignadas;
        sum += eficiencia;
      }
    });
    return sum;
  }, 0);

  const handleEdit = (reg: Registro, machineIndex: number) => {
    if (reg.estado === 'Revisado') {
      alert('No se puede editar un registro que ya ha sido revisado.');
      return;
    }

    setEditId(reg.id + '-' + machineIndex);
    const machine = reg.machines[machineIndex];

    const fechaISO = reg.fecha;
    const dateObj = new Date(fechaISO);
    const fechaHoraLocal = dateObj.toISOString().slice(0, 16);

    setEditData({ ...machine, fechaHora: fechaHoraLocal });
    setEditHoras(String(machine.horasAsignadas));
  };

  // Función para reautenticar al usuario
  const reauthenticateUser = async (password: string): Promise<boolean> => {
    const user = auth.currentUser;
    if (!user || !user.email) return false;

    const credential = EmailAuthProvider.credential(user.email, password);

    try {
      await reauthenticateWithCredential(user, credential);
      return true;
    } catch (error) {
      console.error('Error en reautenticación:', error);
      return false;
    }
  };

  // Función para eliminar con verificación de contraseña
  const handleDeleteWithPassword = async (regId: string, password: string) => {
    // Primera confirmación
    if (!window.confirm('¿Está seguro de que desea eliminar este registro?')) {
      return;
    }

    // Verificar contraseña
    const isAuthenticated = await reauthenticateUser(password);

    if (!isAuthenticated) {
      alert('Contraseña incorrecta. No se puede eliminar el registro.');
      return;
    }

    // Segunda confirmación después de verificación de contraseña
    if (
      !window.confirm(
        'Esta acción no se puede deshacer. ¿Confirma la eliminación?'
      )
    ) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'registro_horometros', regId));
      setRegistros((prev) => prev.filter((reg) => reg.id !== regId));
      alert('Registro eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      alert('Error al eliminar el registro');
    }
  };

  // Función para abrir el modal de contraseña
  const openPasswordModal = (regId: string) => {
    const reg = registros.find((r) => r.id === regId);
    if (reg && reg.estado === 'Revisado') {
      alert('No se puede eliminar un registro que ya ha sido revisado.');
      return;
    }

    setSelectedRegId(regId);
    setPasswordModalOpen(true);
  };

  // Función para manejar la confirmación con contraseña
  const handlePasswordConfirm = async (password: string) => {
    if (selectedRegId) {
      await handleDeleteWithPassword(selectedRegId, password);
    }
    setPasswordModalOpen(false);
    setSelectedRegId(null);
  };

  // Función para actualizar el estado (Revisado/Rechazado)
  const handleEstadoChange = useCallback(
    async (regId: string, nuevoEstado: string) => {
      try {
        await updateDoc(doc(db, 'registro_horometros', regId), {
          estado: nuevoEstado,
          fechaUltimaEdicion: new Date().toISOString(),
          editadoPor: currentUserEmail ?? 'Desconocido'
        });

        // Actualizar el estado local
        setRegistros((prev) =>
          prev.map((reg) =>
            reg.id === regId ? { ...reg, estado: nuevoEstado } : reg
          )
        );
      } catch (error) {
        console.error('Error al actualizar el estado:', error);
      }
    },
    [currentUserEmail]
  );

  const handleSave = async (regId: string, machineIndex: number) => {
    const index = registros.findIndex((r) => r.id === regId);
    if (index === -1) return;
    const reg = registros[index];

    if (reg.estado === 'Revisado') {
      alert('No se puede editar un registro que ya ha sido revisado.');
      setEditId(null);
      return;
    }

    const horasNum = parseFloat(editHoras);
    if (isNaN(horasNum)) {
      alert('Ingrese un número válido para horas.');
      return;
    }

    const newMachines = [...reg.machines];
    const originalMachine = reg.originalMachines
      ? reg.originalMachines[machineIndex]
      : undefined;

    const valoresOriginales: Machine = originalMachine ?? {
      horasAsignadas: '',
      horometroFinal: '',
      horometroInicial: '',
      machine: '',
      reference: '',
      paradasMayores: '',
      observaciones: ''
    };

    newMachines[machineIndex] = {
      horasAsignadas: horasNum,
      horometroFinal:
        editData.horometroFinal ?? originalMachine?.horometroFinal ?? '',
      horometroInicial:
        editData.horometroInicial ?? originalMachine?.horometroInicial ?? '',
      machine: editData.machine ?? originalMachine?.machine ?? '',
      paradasMayores:
        editData.paradasMayores ?? originalMachine?.paradasMayores ?? '',
      reference: editData.reference ?? originalMachine?.reference ?? '',
      observaciones:
        editData.observaciones ?? originalMachine?.observaciones ?? ''
    };

    // Determinar si la fecha fue modificada
    let fechaISO = reg.fecha; // Mantener la fecha original por defecto

    if (editData.fechaHora) {
      const nuevaFecha = new Date(editData.fechaHora);
      const fechaOriginal = new Date(reg.fecha);

      // Solo actualizar si la fecha realmente cambió (comparando timestamps)
      if (nuevaFecha.getTime() !== fechaOriginal.getTime()) {
        fechaISO = nuevaFecha.toISOString();
      }
    }

    const camposModificados: {
      campo: string;
      valorAnterior: unknown;
      valorNuevo: unknown;
    }[] = [];
    (Object.keys(newMachines[machineIndex]) as (keyof Machine)[]).forEach(
      (campo) => {
        const valorAnterior = valoresOriginales[campo];
        const valorNuevo = (newMachines[machineIndex] as Machine)[campo];

        if (valorAnterior !== valorNuevo) {
          camposModificados.push({ campo, valorAnterior, valorNuevo });
        }
      }
    );

    const fechaHora = new Date().toLocaleString('es-CO');
    const usuario = currentUserEmail ?? 'Desconocido';

    try {
      // Solo incluir fecha en la actualización si realmente cambió
      const updateData: Record<string, unknown> = {
        machines: newMachines,
        editadoPor: usuario,
        camposModificados: camposModificados.join(', '),
        fechaUltimaEdicion: new Date().toISOString(),
        detallesEdicion: [
          ...(reg.detallesEdicion ?? []),
          {
            usuario: usuario,
            fechaHora: fechaHora,
            valorAnterior: camposModificados.reduce((acc, c) => {
              acc[c.campo as keyof Machine] = c.valorAnterior as
                | string
                | undefined;
              return acc;
            }, {} as Partial<Machine>),
            valorNuevo: camposModificados.reduce((acc, c) => {
              acc[c.campo as keyof Machine] = c.valorNuevo as
                | string
                | undefined;
              return acc;
            }, {} as Partial<Machine>)
          }
        ]
      };

      // Solo agregar fecha al objeto de actualización si cambió
      if (fechaISO !== reg.fecha) {
        updateData.fecha = fechaISO;
      }

      await updateDoc(
        doc(db, 'registro_horometros', regId),
        updateData as DocumentData
      );
      const newRegistros = [...registros];
      newRegistros[index] = {
        ...reg,
        machines: newMachines,
        // Solo actualizar fecha en el estado si cambió
        ...(fechaISO !== reg.fecha ? { fecha: fechaISO } : {})
      };
      setRegistros(newRegistros);
      setEditId(null);
      alert('Cambios guardados correctamente');
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Error al guardar los cambios');
    }
  };

  const mostrarHoras = (valor: string | number) => {
    return typeof valor === 'number' ? valor.toFixed(2) : String(valor);
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

    // Usar TODOS los registros (sin filtros)
    const rows = registrosFiltrados.flatMap((reg) =>
      reg.machines
        .filter((m) => !maquinaFiltro || m.machine === maquinaFiltro)
        .map((machine) => {
          const horoFin = parseFloat(machine.horometroFinal) || 0;
          const horoIni = parseFloat(machine.horometroInicial) || 0;
          const totalHoras = horoFin - horoIni;

          const standard = parseFloat(machineStandards[machine.machine] || '0');
          const horasAsignadas =
            typeof machine.horasAsignadas === 'string'
              ? parseFloat(machine.horasAsignadas)
              : Number(machine.horasAsignadas) || 0;

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
            'Horas Asignadas': mostrarHoras(machine.horasAsignadas || 0),
            'Horas Trabajadas': totalHoras.toFixed(2),
            Estándar: standard,
            'Estandar en horas': (standard * horasAsignadas).toFixed(2),
            'Eficiencia (horas)': eficiencia.toFixed(2),
            Estado: reg.estado || 'Pendiente'
          };
        })
    );

    // Crear CSV sin comillas para valores numéricos
    const csvContent = [
      headers.join(','), // Encabezados sin comillas
      ...rows.map((row) =>
        headers
          .map((header) => {
            const value = row[header as keyof typeof row];

            // Determinar si el valor es numérico
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

            // Para valores numéricos, no usar comillas
            if (isNumeric) {
              return String(value);
            }

            // Para valores de texto, usar comillas y escapar las existentes
            return `"${String(value || '').replace(/"/g, '""')}"`;
          })
          .join(',')
      )
    ].join('\n');

    // Crear nombre de archivo con información de filtros
    let fileName = 'eficiencia_picado';
    if (fechaFiltro) fileName += `_fecha-${fechaFiltro}`;
    if (maquinaFiltro) fileName += `_maquina-${maquinaFiltro}`;
    if (mesFiltro) fileName += `_mes-${mesFiltro}`;
    if (filtroOperario) fileName += `_operario-${filtroOperario}`;
    fileName += `_${new Date().toISOString().slice(0, 10)}.csv`;

    // Descargar
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calcular sumas totales
  const sumaHorasAsignadas = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const horas =
        typeof machine.horasAsignadas === 'string'
          ? parseFloat(machine.horasAsignadas)
          : machine.horasAsignadas;
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

  // ********************************eficiencia en horas
  const sumaStandarEsperado = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const horasAsignadas =
        typeof machine.horasAsignadas === 'string'
          ? parseFloat(machine.horasAsignadas)
          : machine.horasAsignadas;
      const standard = parseFloat(machineStandards[machine.machine] || '0');
      sum += horasAsignadas * standard;
    });
    return sum;
  }, 0);
  const eficienciaHoras = sumaHorasTrabajadas - sumaStandarEsperado;

  // Suma de todos los estándares (nueva variable)
  const sumaEstandarHoras1 = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const standard = parseFloat(machineStandards[machine.machine] || '0');
      const horasAsignadas =
        typeof machine.horasAsignadas === 'string'
          ? parseFloat(machine.horasAsignadas)
          : machine.horasAsignadas || 0;

      // Solo suma si standard > 0
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
                {editable && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                )}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ediciones
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admin
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
                      colSpan={17}
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

                          {reg.detallesEdicion &&
                            reg.detallesEdicion.length > 0 && (
                              <button
                                onClick={() => handleMostrarDetalles(reg)}
                                className="text-blue-600 hover:text-blue-800"
                                title="Ver historial de ediciones"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                  />
                                </svg>
                              </button>
                            )}

                          {editable && (
                            <div className="flex space-x-1">
                              <button
                                onClick={() =>
                                  handleEstadoChange(reg.id, 'Revisado')
                                }
                                disabled={reg.estado === 'Revisado'}
                                className={`px-2 py-1 rounded text-xs ${
                                  reg.estado === 'Revisado'
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-green-500 hover:bg-green-600 text-white'
                                }`}
                              >
                                Revisado
                              </button>
                              <button
                                onClick={() =>
                                  handleEstadoChange(reg.id, 'Rechazado')
                                }
                                disabled={reg.estado === 'Revisado'}
                                className={`px-2 py-1 rounded text-xs ${
                                  reg.estado === 'Revisado'
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-red-500 hover:bg-red-600 text-white'
                                }`}
                              >
                                Rechazado
                              </button>
                              <button
                                onClick={() => openPasswordModal(reg.id)}
                                disabled={reg.estado === 'Revisado'}
                                className={`px-2 py-1 rounded text-xs ${
                                  reg.estado === 'Revisado'
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-700 hover:bg-gray-800 text-white'
                                }`}
                              >
                                Eliminar
                              </button>
                            </div>
                          )}
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
                      const horoFin = parseFloat(machine.horometroFinal);
                      const horoIni = parseFloat(machine.horometroInicial);
                      const totalHoras =
                        isNaN(horoFin) || isNaN(horoIni)
                          ? 0
                          : horoFin - horoIni;

                      const standardStr =
                        machineStandards[machine.machine] ?? '0';
                      const standard = parseFloat(standardStr);
                      const horasAsignadas =
                        typeof machine.horasAsignadas === 'string'
                          ? parseFloat(machine.horasAsignadas)
                          : machine.horasAsignadas;

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

                      const isEditing = editId === reg.id + '-' + index;
                      const isRevisado = reg.estado === 'Revisado';

                      return (
                        <tr
                          key={`${reg.id}-${index}`}
                          className={`hover:bg-gray-50 ${rowClass}`}
                        >
                          {/* Fecha y hora */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {isEditing ? (
                              <input
                                type="datetime-local"
                                value={editData.fechaHora ?? ''}
                                onChange={(e) =>
                                  setEditData((prev) => ({
                                    ...prev,
                                    fechaHora: e.target.value
                                  }))
                                }
                                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                disabled={isRevisado}
                              />
                            ) : (
                              formatearFecha(reg.fecha)
                            )}
                          </td>

                          <td className="px-4 py-3 whitespace-nowrap">
                            {machine.machine}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {reg.operatorCode}
                          </td>

                          {/* Horómetro inicial */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {isEditing ? (
                              <input
                                type="number"
                                step="0.01"
                                value={editData.horometroInicial ?? ''}
                                onChange={(e) =>
                                  setEditData((prev) => ({
                                    ...prev,
                                    horometroInicial: e.target.value
                                  }))
                                }
                                className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
                                disabled={isRevisado}
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
                            {isEditing ? (
                              <input
                                type="number"
                                step="0.01"
                                value={editData.horometroFinal ?? ''}
                                onChange={(e) =>
                                  setEditData((prev) => ({
                                    ...prev,
                                    horometroFinal: e.target.value
                                  }))
                                }
                                className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
                                disabled={isRevisado}
                              />
                            ) : machine.horometroFinal &&
                              machine.horometroFinal.trim() !== '' ? (
                              parseFloat(machine.horometroFinal).toFixed(2)
                            ) : (
                              '0.00'
                            )}
                          </td>

                          {/* reference */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {machine.reference ? machine.reference : 'N/A'}
                          </td>

                          {/* Paradas mayores */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {isEditing ? (
                              <input
                                type="text"
                                value={editData.paradasMayores ?? ''}
                                onChange={(e) =>
                                  setEditData((prev) => ({
                                    ...prev,
                                    paradasMayores: e.target.value
                                  }))
                                }
                                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                disabled={isRevisado}
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
                            <div
                              className="max-w-xs truncate"
                              title={machine.observaciones}
                            >
                              {machine.observaciones}
                            </div>
                          </td>

                          {/* Horas asignadas */}
                          <td className="px-4 py-3 whitespace-nowrap">
                            {isEditing ? (
                              <input
                                type="number"
                                step="0.01"
                                value={editHoras}
                                onChange={(e) => setEditHoras(e.target.value)}
                                className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
                                min="0"
                                disabled={isRevisado}
                              />
                            ) : (
                              mostrarHoras(machine.horasAsignadas || 0.0)
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
                                  ) *
                                  (typeof machine.horasAsignadas === 'string'
                                    ? parseFloat(machine.horasAsignadas)
                                    : machine.horasAsignadas || 0)
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
                          {editable && (
                            <td className="px-4 py-3 whitespace-nowrap">
                              {isEditing ? (
                                <button
                                  onClick={() => handleSave(reg.id, index)}
                                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                                  disabled={isRevisado}
                                >
                                  Guardar
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleEdit(reg, index)}
                                  className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                                  disabled={isRevisado}
                                >
                                  Editar
                                </button>
                              )}
                            </td>
                          )}

                          {/* Icono usuario con detalles */}
                          <td className="px-4 py-3 whitespace-nowrap text-center">
                            {reg.detallesEdicion &&
                              reg.detallesEdicion.length > 0 && (
                                <div
                                  className="inline-block cursor-pointer"
                                  onClick={() => handleMostrarDetalles(reg)}
                                >
                                  <svg
                                    className="w-5 h-5 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                    />
                                  </svg>
                                </div>
                              )}
                          </td>

                          {/* Botones de estado - vacío porque ya se muestran en el encabezado */}
                          <td className="px-4 py-3 whitespace-nowrap"></td>
                        </tr>
                      );
                    })}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {modalVisible && registroDetalleModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Detalles de Edición
                </h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleCerrarModal}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {registroDetalleModal.detallesEdicion?.map((detalle, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-200 pb-4 last:border-0"
                  >
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Usuario:
                        </p>
                        <p className="font-medium">{detalle.usuario}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Fecha y hora:
                        </p>
                        <p>{detalle.fechaHora}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">
                        Modificaciones:
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="px-3 py-1 text-left">Campo</th>
                              <th className="px-3 py-1 text-left">
                                Valor Anterior
                              </th>
                              <th className="px-3 py-1 text-left">
                                Valor Nuevo
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(detalle.valorAnterior).map((campo) => {
                              const anterior = (
                                detalle.valorAnterior as Partial<Machine>
                              )[campo as keyof Machine];
                              const nuevo = (
                                detalle.valorNuevo as Partial<Machine>
                              )[campo as keyof Machine];

                              if (anterior !== nuevo) {
                                return (
                                  <tr
                                    key={campo}
                                    className="border-b border-gray-200 last:border-0"
                                  >
                                    <td className="px-3 py-1 font-medium">
                                      {campo}
                                    </td>
                                    <td className="px-3 py-1">
                                      {anterior || '(vacío)'}
                                    </td>
                                    <td className="px-3 py-1">
                                      {nuevo || '(vacío)'}
                                    </td>
                                  </tr>
                                );
                              }
                              return null;
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div
          className={`mt-6 p-4 rounded-lg shadow-sm ${
            sumaEficienciaTotal >= 0
              ? 'bg-green-100 border border-green-200 text-green-800'
              : sumaEficienciaTotal >= -5 && sumaEficienciaTotal <= -0.1
                ? 'bg-yellow-100 border border-yellow-200 text-yellow-800'
                : 'bg-red-100 border border-red-200 text-red-800'
          }`}
        >
          {/* <p className="font-semibold">
            Resumen general - Porcentaje de eficiencia:{' '}
            {sumaEstandarHoras1 > 0 && !isNaN(sumaHorasTrabajadas)
              ? ((sumaHorasTrabajadas / sumaEstandarHoras1 - 1) * 100).toFixed(
                  2
                )
              : '0.00'}
            %
          </p> */}
        </div>
      </div>

      <PasswordModal
        isOpen={passwordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        onConfirm={handlePasswordConfirm}
      />
    </>
  );
};

export default EficencePicado;
