// F1315.tsx
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  onSnapshot,
  query,
  where
} from 'firebase/firestore';
import app from '../../../lib/credentialFirebase';
import { useEffect, useState } from 'react';
import '../../../App.scss';

const db = getFirestore(app);

// Tipos
type AssignMachineUser = {
  id: string;
  operator: string;
  machines: string[];
  timestamp?: string;
};

type MachineStandard = {
  abbreviation: string;
  date: string;
  efficiency: string;
  machineName: string;
};

type MachineData = {
  machine: string;
  horometroInicial: string;
  horometroFinal: string;
  horasAsignadas: string | number;
  observaciones: string;
  paradasMayores: string;
  reference: string;
  standard?: MachineStandard;
  horasTrabajadas?: number;
};

type RegistroCard = {
  id: string;
  fecha: string;
  operatorCode: string;
  machines: MachineData[];
  paradasMayores: string;
};

type Referencia = {
  nombre: string;
  codigo: string;
};

// Componente de globo indicador
const EstadoRegistroGlobo = ({
  operario,
  operariosRegistradosHoy
}: {
  operario: string;
  operariosRegistradosHoy: string[];
}) => {
  const haRegistrado = operariosRegistradosHoy.includes(operario);

  return (
    <div
      className={`w-4 h-4 rounded-full border-2 border-white shadow-sm ${
        haRegistrado ? 'bg-green-500' : 'bg-red-500'
      }`}
      title={
        operario +
        (haRegistrado ? ' - Ya registró hoy' : ' - No ha registrado hoy')
      }
    ></div>
  );
};

// Componente de tarjeta de máquina - MEJORADO
const MachineCard = ({
  machine,
  index,
  onUpdate,
  standards,
  referencias
}: {
  machine: MachineData;
  index: number;
  registro: RegistroCard;
  onUpdate: (index: number, field: keyof MachineData, value: string) => void;
  standards: Record<string, MachineStandard>;
  referencias: Referencia[];
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // ✅ Calcular horas trabajadas en tiempo real
  const calcularHorasTrabajadas = (): number => {
    const horometroInicial = parseFloat(machine.horometroInicial) || 0;
    const horometroFinal = parseFloat(machine.horometroFinal) || 0;

    if (horometroFinal >= horometroInicial) {
      return horometroFinal - horometroInicial;
    }
    return 0;
  };

  const horasTrabajadas = calcularHorasTrabajadas();
  const excedeLimite = horasTrabajadas > 16;

  return (
    <div
      className={`border-2 p-4 mb-4 rounded-xl transition-all duration-300 shadow-lg ${
        isFocused
          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white ring-4 ring-blue-100'
          : 'border-blue-300 bg-gradient-to-br from-white to-blue-50'
      }`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* HEADER MEJORADO DE MÁQUINA */}
      <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold mr-3 shadow-md">
            {index + 1}
          </div>
          <div>
            <h4 className="font-bold text-xl">{machine.machine}</h4>
            <p className="text-blue-100 text-sm">Máquina {index + 1}</p>
          </div>
        </div>
        <div className="text-sm bg-blue-800/50 px-3 py-1.5 rounded-lg border border-blue-400">
          <span className="font-semibold">📋 Formulario</span>
        </div>
      </div>

      {/* INDICADOR VISUAL DE ENFOQUE */}
      {isFocused && (
        <div className="mb-3 p-3 bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500 rounded-lg">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm">📍</span>
            </div>
            <p className="text-sm font-medium text-blue-800">
              Estás ingresando datos para:{' '}
              <strong className="text-blue-900">{machine.machine}</strong>
            </p>
          </div>
        </div>
      )}

      {/* CONTENIDO DE LA MÁQUINA */}
      {standards[machine.machine] && (
        <div className="mb-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-2 rounded-lg border">
              <p className="text-xs text-gray-500 font-medium">Abreviatura</p>
              <p className="font-bold text-gray-800">
                {standards[machine.machine].abbreviation}
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg border">
              <p className="text-xs text-gray-500 font-medium">
                Estándar de Eficiencia
              </p>
              <p className="font-bold text-gray-800">
                {standards[machine.machine].efficiency}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ✅ PANEL DE HORAS TRABAJADAS */}
      <div
        className={`mb-4 p-4 rounded-xl border-2 shadow-sm ${
          excedeLimite
            ? 'bg-gradient-to-r from-red-50 to-red-100 border-red-300'
            : horasTrabajadas > 0
              ? 'bg-gradient-to-r from-green-50 to-green-100 border-green-300'
              : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                excedeLimite ? 'bg-red-100' : 'bg-green-100'
              }`}
            >
              <span
                className={`text-xl ${excedeLimite ? 'text-red-600' : 'text-green-600'}`}
              >
                📊
              </span>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">Horas Trabajadas</h5>
              <p
                className={`text-2xl font-bold ${
                  excedeLimite ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {horasTrabajadas.toFixed(2)} horas
              </p>
            </div>
          </div>
          {excedeLimite && (
            <div className="flex items-center bg-red-600 text-white px-3 py-1.5 rounded-lg">
              <span className="mr-1">⚠️</span>
              <span className="font-semibold text-sm">Máximo 16 horas</span>
            </div>
          )}
        </div>
        <div className="text-xs text-gray-600 mt-2 p-2 bg-white/50 rounded">
          <strong>Cálculo:</strong> {machine.horometroFinal || '0'} -{' '}
          {machine.horometroInicial || '0'} = {horasTrabajadas.toFixed(2)} horas
        </div>
      </div>

      {/* FORMULARIO CON MEJOR VISUALIZACIÓN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* GRUPO DE HORÓMETROS */}
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white">⏱️</span>
              </div>
              <label className="block font-semibold text-gray-800 text-lg">
                Horas asignadas
              </label>
            </div>
            <input
              type="number"
              min={0}
              max={16}
              required
              value={machine.horasAsignadas}
              onChange={(e) =>
                onUpdate(index, 'horasAsignadas', e.target.value)
              }
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-lg bg-white shadow-sm"
              placeholder="Ej: 8"
            />
            <p className="text-xs text-gray-600 mt-1 ml-10">
              Máximo permitido: 16 horas
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white">🔰</span>
              </div>
              <label className="block font-semibold text-gray-800 text-lg">
                Horómetro inicial
              </label>
            </div>
            <input
              type="number"
              required
              min={0}
              step="0.01"
              value={machine.horometroInicial}
              onChange={(e) =>
                onUpdate(index, 'horometroInicial', e.target.value)
              }
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-800 text-lg bg-white shadow-sm"
              placeholder="Horómetro actual"
            />
            <p className="text-xs text-gray-600 mt-1 ml-10">
              Valor actual de la máquina
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white">🏁</span>
              </div>
              <label className="block font-semibold text-gray-800 text-lg">
                Horómetro final
              </label>
            </div>
            <input
              type="number"
              required
              min={Number(machine.horometroInicial) || 0}
              step="0.01"
              value={machine.horometroFinal}
              onChange={(e) =>
                onUpdate(index, 'horometroFinal', e.target.value)
              }
              className={`w-full border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-blue-500 text-gray-800 text-lg shadow-sm ${
                excedeLimite
                  ? 'border-red-500 focus:ring-red-500 bg-red-50'
                  : 'border-gray-300 focus:ring-red-500 bg-white'
              }`}
              placeholder="Debe ser mayor al inicial"
            />
            <p
              className={`text-xs mt-1 ml-10 ${excedeLimite ? 'text-red-600 font-semibold' : 'text-gray-600'}`}
            >
              {excedeLimite
                ? '⚠️ Verificar horas trabajadas'
                : 'Valor al finalizar el turno'}
            </p>
          </div>
        </div>

        {/* GRUPO DE INFORMACIÓN ADICIONAL */}
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white">⏰</span>
              </div>
              <label className="block font-semibold text-gray-800 text-lg">
                Paradas mayores (minutos)
              </label>
            </div>
            <input
              type="number"
              required
              min={0}
              value={machine.paradasMayores}
              onChange={(e) =>
                onUpdate(index, 'paradasMayores', e.target.value)
              }
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-800 text-lg bg-white shadow-sm"
              placeholder="Ej: 30"
            />
            <p className="text-xs text-gray-600 mt-1 ml-10">
              Tiempo total de paradas en minutos
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white">📋</span>
              </div>
              <label className="block font-semibold text-gray-800 text-lg">
                Referencia
              </label>
            </div>
            <select
              value={machine.reference}
              required
              onChange={(e) => onUpdate(index, 'reference', e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800 text-lg bg-white shadow-sm appearance-none"
            >
              <option value="">Selecciona una referencia</option>
              {referencias
                .slice()
                .sort((a, b) => a.nombre.localeCompare(b.nombre))
                .map((ref, idx) => (
                  <option key={idx} value={ref.nombre}>
                    {ref.nombre}
                  </option>
                ))}
            </select>
            <p className="text-xs text-gray-600 mt-1 ml-10">
              Selecciona la referencia trabajada
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-xl border border-cyan-200 shadow-sm">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white">📝</span>
              </div>
              <label className="block font-semibold text-gray-800 text-lg">
                Observaciones
              </label>
            </div>
            <textarea
              value={machine.observaciones}
              onChange={(e) => onUpdate(index, 'observaciones', e.target.value)}
              rows={4}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 text-lg bg-white shadow-sm resize-none"
              placeholder="Ingresa observaciones relevantes..."
            />
            <p className="text-xs text-gray-600 mt-1 ml-10">
              Notas importantes sobre la máquina
            </p>
          </div>
        </div>
      </div>

      {/* VALIDACIÓN EN TIEMPO REAL */}
      <div className="mt-4 space-y-2">
        {machine.horometroFinal &&
          machine.horometroInicial &&
          Number(machine.horometroFinal) < Number(machine.horometroInicial) && (
            <div className="p-3 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg flex items-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">⚠️</span>
              </div>
              <div>
                <p className="font-semibold text-red-700">
                  Error de validación
                </p>
                <p className="text-red-600 text-sm">
                  El horómetro final no puede ser menor que el inicial
                </p>
              </div>
            </div>
          )}

        {excedeLimite && (
          <div className="p-3 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg flex items-center">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white">❌</span>
            </div>
            <div>
              <p className="font-semibold text-red-700">Límite excedido</p>
              <p className="text-red-600 text-sm">
                Las horas trabajadas no pueden exceder 16 horas.
                <strong> Actual: {horasTrabajadas.toFixed(2)} horas</strong>
              </p>
            </div>
          </div>
        )}

        {horasTrabajadas > 0 && !excedeLimite && (
          <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-lg flex items-center">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white">✅</span>
            </div>
            <div>
              <p className="font-semibold text-green-700">Horas válidas</p>
              <p className="text-green-600 text-sm">
                Horas trabajadas válidas:{' '}
                <strong>{horasTrabajadas.toFixed(2)} horas</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const F1315 = () => {
  const [assignMachineUser, setAssignMachineUser] = useState<
    AssignMachineUser[]
  >([]);
  const [operatorCode, setOperatorCode] = useState<string>('');
  const [, setMachinesAsignadas] = useState<string[]>([]);
  const [machineInputs, setMachineInputs] = useState<MachineData[]>([]);
  const [fecha, setFecha] = useState<string>('');
  const [ultimosHorometros, setUltimosHorometros] = useState<
    Record<string, string>
  >({});
  const [operariosRegistradosHoy, setOperariosRegistradosHoy] = useState<
    string[]
  >([]);
  const [showStatusPanel, setShowStatusPanel] = useState<boolean>(false);
  const [registrosEnProceso, setRegistrosEnProceso] = useState<Set<string>>(
    new Set()
  );
  const [ultimoOperarioRegistrado, setUltimoOperarioRegistrado] =
    useState<string>('');
  const [standards, setStandards] = useState<Record<string, MachineStandard>>(
    {}
  );
  const [registros, setRegistros] = useState<RegistroCard[]>([]);
  const [referencias, setReferencias] = useState<Referencia[]>([]);
  const [isFormFullscreen, setIsFormFullscreen] = useState(false);

  // Obtener la fecha actual en formato YYYY-MM-DD (Colombia)
  const obtenerFechaActualColombia = (): string => {
    const now = new Date();
    const offset = -5; // UTC-5 para Colombia
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const bogotaTime = new Date(utc + offset * 3600000);

    const year = bogotaTime.getFullYear();
    const month = String(bogotaTime.getMonth() + 1).padStart(2, '0');
    const day = String(bogotaTime.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  // Escuchar en tiempo real los registros de hoy
  useEffect(() => {
    const fechaHoy = obtenerFechaActualColombia();

    const q = query(
      collection(db, 'registro_horometros'),
      where('fecha', '>=', `${fechaHoy}T00:00:00`),
      where('fecha', '<=', `${fechaHoy}T23:59:59`)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const operarios: string[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as RegistroCard;
        if (data.operatorCode && !operarios.includes(data.operatorCode)) {
          operarios.push(data.operatorCode);
        }
      });

      setOperariosRegistradosHoy(operarios);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUltimosHorometros = async (): Promise<void> => {
      try {
        const snapshot = await getDocs(collection(db, 'registro_horometros'));
        const ultimos: Record<
          string,
          { fecha: string; horometroFinal: string }
        > = {};

        snapshot.forEach((doc) => {
          const data = doc.data() as RegistroCard;
          data.machines.forEach((machine) => {
            const clave = machine.machine;
            const registroActual = ultimos[clave];

            if (
              !registroActual ||
              new Date(data.fecha) > new Date(registroActual.fecha)
            ) {
              ultimos[clave] = {
                fecha: data.fecha,
                horometroFinal: machine.horometroFinal
              };
            }
          });
        });

        const soloHorometros: Record<string, string> = {};
        for (const clave in ultimos) {
          soloHorometros[clave] = ultimos[clave].horometroFinal;
        }

        setUltimosHorometros(soloHorometros);
      } catch (error) {
        console.error('Error al traer últimos horómetros:', error);
      }
    };

    fetchUltimosHorometros();
  }, []);

  useEffect(() => {
    const fetchReferencias = async (): Promise<void> => {
      try {
        const snapshot = await getDocs(collection(db, 'referencias'));
        const data = snapshot.docs.map((doc) => doc.data() as Referencia);
        setReferencias(data);
      } catch (error) {
        console.error('Error al cargar referencias:', error);
      }
    };

    fetchReferencias();
  }, []);

  useEffect(() => {
    const fetchAssignMachine = async (): Promise<void> => {
      try {
        const querySnapShot = await getDocs(collection(db, 'assignments'));
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as AssignMachineUser[];
        setAssignMachineUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAssignMachine();
  }, []);

  const fetchStandards = async (): Promise<void> => {
    try {
      const snapshot = await getDocs(collection(db, 'machines'));
      const standardsData: Record<string, MachineStandard> = {};
      snapshot.forEach((doc) => {
        const data = doc.data() as MachineStandard;
        standardsData[data.abbreviation] = data;
      });
      setStandards(standardsData);
    } catch (error) {
      console.error('Error fetching standards:', error);
    }
  };

  useEffect(() => {
    fetchStandards();
  }, []);

  const handleSearch = (value: string): void => {
    setOperatorCode(value);
    const found = assignMachineUser.find((entry) => entry.operator === value);

    if (found) {
      setMachinesAsignadas(found.machines);

      setMachineInputs(
        found.machines.map((machine) => {
          const clave = machine;
          const horometroPrevio = ultimosHorometros[clave] || '';
          return {
            machine,
            horometroInicial: horometroPrevio,
            horometroFinal: '',
            horasAsignadas: '',
            observaciones: '',
            paradasMayores: '',
            reference: ''
          };
        })
      );
    } else {
      setMachinesAsignadas([]);
      setMachineInputs([]);
    }
  };

  const handleAddRegistro = (): void => {
    if (!fecha || !operatorCode || machineInputs.length === 0) {
      alert('Por favor completa todos los campos antes de agregar.');
      return;
    }
    const nuevoRegistro: RegistroCard = {
      id: Date.now().toString(),
      fecha,
      operatorCode,
      machines: [...machineInputs],
      paradasMayores: ''
    };
    setRegistros([...registros, nuevoRegistro]);
    setFecha('');
    setOperatorCode('');
    setMachinesAsignadas([]);
    setMachineInputs([]);
  };

  // 🔒 Prevenir envíos duplicados
  const prevenirDuplicados = async (
    operatorCode: string,
    fecha: string
  ): Promise<boolean> => {
    try {
      const q = query(
        collection(db, 'registro_horometros'),
        where('operatorCode', '==', operatorCode),
        where('fecha', '>=', `${fecha}T00:00:00`),
        where('fecha', '<=', `${fecha}T23:59:59`)
      );

      const snapshot = await getDocs(q);
      return !snapshot.empty;
    } catch (error) {
      console.error('Error verificando duplicados:', error);
      return false;
    }
  };

  // 🔄 Manejar actualizaciones de máquinas
  const handleMachineUpdate = (
    registroId: string,
    index: number,
    field: keyof MachineData,
    value: string
  ): void => {
    setRegistros((prev) =>
      prev.map((reg) =>
        reg.id === registroId
          ? {
              ...reg,
              machines: reg.machines.map((mm, i) =>
                i === index ? { ...mm, [field]: value } : mm
              )
            }
          : reg
      )
    );
  };

  // ✅ Validar horas trabajadas antes de enviar
  const validarHorasTrabajadas = (machines: MachineData[]): boolean => {
    for (const machine of machines) {
      const horometroInicial = parseFloat(machine.horometroInicial);
      const horometroFinal = parseFloat(machine.horometroFinal);

      if (isNaN(horometroInicial) || isNaN(horometroFinal)) {
        continue;
      }

      const horasTrabajadas = horometroFinal - horometroInicial;

      if (horasTrabajadas > 16) {
        alert(
          `❌ Las horas trabajadas en ${machine.machine} exceden el límite de 16 horas. Actual: ${horasTrabajadas.toFixed(2)} horas`
        );
        return false;
      }
    }
    return true;
  };

  const handleEnviarRegistro = async (registroId: string): Promise<void> => {
    const registro = registros.find((r) => r.id === registroId);
    if (!registro) return;

    // Prevenir múltiples clics
    if (registrosEnProceso.has(registroId)) {
      alert('El registro ya se está procesando. Por favor espera...');
      return;
    }

    // ✅ Validar horas trabajadas antes de continuar
    if (!validarHorasTrabajadas(registro.machines)) {
      return;
    }

    // Verificar si ya existe un registro para este operario hoy
    const yaRegistrado = await prevenirDuplicados(
      registro.operatorCode,
      registro.fecha
    );
    if (yaRegistrado) {
      alert(
        '❌ Ya existe un registro para este operario hoy. No puedes enviar duplicados.'
      );
      return;
    }

    // Validar campos principales
    if (
      !registro.operatorCode?.toString().trim() ||
      !registro.fecha?.toString().trim()
    ) {
      alert('Por favor completa el código de operario y la fecha.');
      return;
    }

    if (registro.machines.length === 0) {
      alert('Debe haber al menos una máquina en el registro.');
      return;
    }

    // Validar cada máquina
    for (const machine of registro.machines) {
      if (!machine.machine?.toString().trim()) {
        alert('Falta el nombre de la máquina.');
        return;
      }

      if (
        machine.horometroInicial === '' ||
        isNaN(Number(machine.horometroInicial)) ||
        machine.horometroFinal === '' ||
        isNaN(Number(machine.horometroFinal)) ||
        machine.horasAsignadas === '' ||
        isNaN(Number(machine.horasAsignadas)) ||
        machine.paradasMayores === '' ||
        isNaN(Number(machine.paradasMayores))
      ) {
        alert(
          `Todos los campos numéricos son obligatorios para la máquina: ${machine.machine}`
        );
        return;
      }

      if (Number(machine.horometroFinal) < Number(machine.horometroInicial)) {
        alert(
          `El horómetro final no puede ser menor que el inicial en la máquina: ${machine.machine}`
        );
        return;
      }

      if (!machine.reference?.toString().trim()) {
        alert(
          `Debe seleccionar una referencia para la máquina: ${machine.machine}`
        );
        return;
      }
    }

    // Bloquear el registro mientras se procesa
    setRegistrosEnProceso((prev) => new Set(prev).add(registroId));

    // Construir payload
    const payload = {
      operatorCode: registro.operatorCode,
      fecha: obtenerFechaColombia(),
      machines: registro.machines,
      timestamp: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, 'registro_horometros'), payload);
      setUltimoOperarioRegistrado(registro.operatorCode);
      alert('✅ Registro enviado correctamente');

      // Eliminar el registro de la lista local
      setRegistros(registros.filter((r) => r.id !== registroId));
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
      alert('❌ Error al guardar los datos');
    } finally {
      // Desbloquear el registro
      setRegistrosEnProceso((prev) => {
        const newSet = new Set(prev);
        newSet.delete(registroId);
        return newSet;
      });
    }
  };

  // hora colombia
  const obtenerFechaColombia = (): string => {
    const now = new Date();
    const offset = -5; // UTC-5
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const bogotaTime = new Date(utc + offset * 3600000);

    const year = bogotaTime.getFullYear();
    const month = String(bogotaTime.getMonth() + 1).padStart(2, '0');
    const day = String(bogotaTime.getDate()).padStart(2, '0');
    const hours = String(bogotaTime.getHours()).padStart(2, '0');
    const minutes = String(bogotaTime.getMinutes()).padStart(2, '0');
    const seconds = String(bogotaTime.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFormFullscreen(!isFormFullscreen);
    if (!isFormFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div
      className={`${isFormFullscreen ? 'fixed inset-0 z-50 bg-white overflow-y-auto' : 'min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'}`}
    >
      {/* Contenedor principal */}
      <div className={`${isFormFullscreen ? 'p-0' : 'p-4'}`}>
        {/* Header del formulario */}
        <div
          className={`${isFormFullscreen ? 'sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' : 'mb-6'}`}
        >
          <div className={`${isFormFullscreen ? 'p-6 text-white' : ''}`}>
            <div className="flex justify-between items-center">
              <div>
                <h1
                  className={`font-bold ${isFormFullscreen ? 'text-2xl' : 'text-xl'} text-gray-800`}
                >
                  📋 Formulario de Registro de Horómetros
                </h1>
                <p
                  className={`${isFormFullscreen ? 'text-blue-100' : 'text-gray-600'} text-sm mt-1`}
                >
                  Complete todos los campos para registrar las horas de trabajo
                  de las máquinas
                </p>
              </div>

              <div className="flex items-center space-x-2">
                {/* Botón de pantalla completa */}
                <button
                  onClick={toggleFullscreen}
                  className={`p-2 rounded-lg ${isFormFullscreen ? 'bg-blue-800 text-white hover:bg-blue-900' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors`}
                  title={
                    isFormFullscreen
                      ? 'Salir de pantalla completa'
                      : 'Pantalla completa'
                  }
                >
                  {isFormFullscreen ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                      />
                    </svg>
                  )}
                </button>

                {isFormFullscreen && (
                  <button
                    onClick={toggleFullscreen}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Salir de pantalla completa
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal con scroll */}
        <div className={`${isFormFullscreen ? 'p-6 max-w-7xl mx-auto' : ''}`}>
          {/* PANEL DE CONFIRMACIÓN DE ENVÍO */}
          {ultimoOperarioRegistrado && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Registro enviado exitosamente
                    </p>
                    <p className="text-green-100">
                      Operario: {ultimoOperarioRegistrado}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setUltimoOperarioRegistrado('')}
                  className="text-white hover:text-green-200 text-lg"
                >
                  ×
                </button>
              </div>
            </div>
          )}

          {/* Panel de estado compacto */}
          <div className="mb-6 bg-gradient-to-r from-blue-800 to-blue-900 p-4 rounded-xl shadow-lg text-white">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowStatusPanel(!showStatusPanel)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span>👥</span>
                </div>
                <div>
                  <h3 className="font-semibold">Estado de registros hoy</h3>
                  <p className="text-blue-200 text-sm">
                    {operariosRegistradosHoy.length}/{assignMachineUser.length}{' '}
                    operarios registrados
                  </p>
                </div>
              </div>
              <span className="text-blue-200">
                {showStatusPanel ? '▲' : '▼'}
              </span>
            </div>

            {showStatusPanel && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                {assignMachineUser.map((operario) => {
                  const haRegistrado = operariosRegistradosHoy.includes(
                    operario.operator
                  );

                  return (
                    <div
                      key={operario.id}
                      className={`p-2 rounded-lg flex items-center ${haRegistrado ? 'bg-green-900/50' : 'bg-red-900/50'}`}
                      title={
                        operario.operator +
                        (haRegistrado
                          ? ' - Ya registró hoy'
                          : ' - No ha registrado hoy')
                      }
                    >
                      <EstadoRegistroGlobo
                        operario={operario.operator}
                        operariosRegistradosHoy={operariosRegistradosHoy}
                      />
                      <span className="ml-2 text-sm truncate">
                        {operario.operator}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Formulario de búsqueda */}
          <div className="mb-8 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-xl">🔍</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Búsqueda de Operario
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-gray-700 font-semibold">
                    Código de operario
                  </label>
                  {operatorCode && (
                    <div className="flex items-center">
                      <EstadoRegistroGlobo
                        operario={operatorCode}
                        operariosRegistradosHoy={operariosRegistradosHoy}
                      />
                      <span
                        className={`ml-2 text-sm font-medium ${operariosRegistradosHoy.includes(operatorCode) ? 'text-green-600' : 'text-yellow-600'}`}
                      >
                        {operariosRegistradosHoy.includes(operatorCode)
                          ? 'Registrado'
                          : 'Pendiente'}
                      </span>
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  value={operatorCode}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Ingrese el código del operario"
                  className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Fecha de registro
                  </label>
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 bg-white shadow-sm"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    onClick={handleAddRegistro}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                  >
                    <span className="mr-2">👁️</span>
                    Ver mis máquinas asignadas
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de registros */}
          <div className="space-y-6">
            {registros.map((registro) => (
              <div
                key={registro.id}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-blue-200 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Header del registro */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-xl">📅</span>
                        </div>
                        <div>
                          <p className="font-semibold text-lg">
                            Fecha: {registro.fecha}
                          </p>
                          <p className="text-blue-100">
                            Código: {registro.operatorCode}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                          <span className="text-sm">🏭</span>
                        </div>
                        <p className="text-blue-100">
                          {registro.machines.length} máquina
                          {registro.machines.length !== 1 ? 's' : ''} asignada
                          {registro.machines.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleEnviarRegistro(registro.id)}
                      disabled={registrosEnProceso.has(registro.id)}
                      className={`px-6 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-200 flex items-center ${
                        registrosEnProceso.has(registro.id)
                          ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:shadow-xl'
                      }`}
                    >
                      {registrosEnProceso.has(registro.id) ? (
                        <>
                          <span className="mr-2">⏳</span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <span className="mr-2">🚀</span>
                          Enviar Registro
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* LISTA DE MÁQUINAS */}
                <div className="p-6">
                  {registro.machines.map((machine, index) => (
                    <MachineCard
                      key={index}
                      machine={machine}
                      index={index}
                      registro={registro}
                      onUpdate={(idx, field, value) =>
                        handleMachineUpdate(registro.id, idx, field, value)
                      }
                      standards={standards}
                      referencias={referencias}
                    />
                  ))}
                </div>

                {/* INSTRUCCIONES */}
                <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-t border-yellow-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-xl">📋</span>
                    </div>
                    <h5 className="font-bold text-gray-800 text-lg">
                      Instrucciones importantes:
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span className="text-gray-700">
                        Verifica que estás ingresando datos en la máquina
                        correcta
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span className="text-gray-700">
                        El horómetro final debe ser mayor al inicial
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span className="text-gray-700">
                        Las horas trabajadas no pueden exceder 16 horas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span className="text-gray-700">
                        Completa todos los campos antes de enviar
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span className="text-gray-700">
                        Solo puedes enviar un registro por día
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje cuando no hay registros */}
          {registros.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No hay registros pendientes
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Ingresa el código del operario, selecciona la fecha y haz clic
                en "Ver mis máquinas" para comenzar.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Botón flotante para pantalla completa */}
      {!isFormFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 z-40"
          title="Pantalla completa para mejor visibilidad"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default F1315;
