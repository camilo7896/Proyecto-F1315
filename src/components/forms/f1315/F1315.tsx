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
  horasTrabajadas?: number; // ✅ Nuevo campo para horas trabajadas
};

type RegistroCard = {
  id: string;
  fecha: string;
  operatorCode: string;
  machines: MachineData[];
  paradasMayores: string;
};

type ProductivityAnalysis = {
  machine: string;
  issues: string[];
  recommendations: string[];
  efficiency: number;
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
      className={`w-3 h-3 rounded-full ${
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
      className={`border-2 p-3 mb-3 rounded-lg transition-all duration-300 ${
        isFocused
          ? 'border-blue-500 bg-blue-50 shadow-lg'
          : 'border-amber-400 bg-amber-50'
      }`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* HEADER MEJORADO DE MÁQUINA */}
      <div className="flex items-center justify-between mb-3 p-2 bg-white rounded border">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-2">
            {index + 1}
          </div>
          <h4 className="font-bold text-lg text-blue-900">{machine.machine}</h4>
        </div>
        <div className="text-sm bg-yellow-100 px-2 py-1 rounded border">
          <span className="font-semibold">Máquina {index + 1}</span>
        </div>
      </div>

      {/* INDICADOR VISUAL DE ENFOQUE */}
      {isFocused && (
        <div className="mb-2 p-2 bg-blue-100 border border-blue-300 rounded text-sm text-blue-700">
          📍 Estás ingresando datos para: <strong>{machine.machine}</strong>
        </div>
      )}

      {/* CONTENIDO DE LA MÁQUINA */}
      {standards[machine.machine] && (
        <div className="mb-3 p-3 bg-gray-100 border rounded text-sm">
          <div className="grid grid-cols-2 gap-2">
            <p>
              <strong>Abreviatura:</strong>{' '}
              {standards[machine.machine].abbreviation}
            </p>
            <p>
              <strong>Estándar:</strong> {standards[machine.machine].efficiency}
            </p>
          </div>
        </div>
      )}

      {/* ✅ PANEL DE HORAS TRABAJADAS */}
      <div
        className={`mb-3 p-3 rounded border ${
          excedeLimite
            ? 'bg-red-100 border-red-300'
            : horasTrabajadas > 0
              ? 'bg-green-100 border-green-300'
              : 'bg-gray-100 border-gray-300'
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h5 className="font-semibold text-gray-700">📊 Horas Trabajadas</h5>
            <p
              className={`text-lg font-bold ${
                excedeLimite ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {horasTrabajadas.toFixed(2)} horas
            </p>
          </div>
          {excedeLimite && (
            <div className="text-red-600 text-sm font-semibold">
              ⚠️ Máximo 16 horas
            </div>
          )}
        </div>
        <div className="text-xs text-gray-600 mt-1">
          Cálculo: {machine.horometroFinal || '0'} -{' '}
          {machine.horometroInicial || '0'} = {horasTrabajadas.toFixed(2)} horas
        </div>
      </div>

      {/* FORMULARIO CON MEJOR VISUALIZACIÓN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        {/* GRUPO DE HORÓMETROS */}
        <div className="space-y-2">
          <div className="bg-gray-100 p-2 rounded border">
            <label className="block mb-1 font-semibold text-gray-700">
              ⏱️ Horas asignadas
            </label>
            <input
              type="number"
              min={0}
              max={16}
              required
              value={machine.horasAsignadas}
              onChange={(e) =>
                onUpdate(index, 'horasAsignadas', e.target.value)
              }
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ej: 8"
            />
          </div>

          <div className="bg-green-50 p-2 rounded border border-green-200">
            <label className="block mb-1 font-semibold text-gray-700">
              🔰 Horómetro inicial
            </label>
            <input
              type="number"
              required
              min={0}
              step="0.01"
              value={machine.horometroInicial}
              onChange={(e) =>
                onUpdate(index, 'horometroInicial', e.target.value)
              }
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Horómetro actual"
            />
          </div>

          <div className="bg-red-50 p-2 rounded border border-red-200">
            <label className="block mb-1 font-semibold text-gray-700">
              🏁 Horómetro final
            </label>
            <input
              type="number"
              required
              min={Number(machine.horometroInicial) || 0}
              step="0.01"
              value={machine.horometroFinal}
              onChange={(e) =>
                onUpdate(index, 'horometroFinal', e.target.value)
              }
              className={`w-full border rounded px-3 py-2 focus:ring-2 focus:border-blue-500 ${
                excedeLimite
                  ? 'border-red-500 focus:ring-red-500 bg-red-50'
                  : 'border-gray-300 focus:ring-red-500'
              }`}
              placeholder="Debe ser mayor al inicial"
            />
          </div>
        </div>

        {/* GRUPO DE INFORMACIÓN ADICIONAL */}
        <div className="space-y-2">
          <div className="bg-orange-50 p-2 rounded border border-orange-200">
            <label className="block mb-1 font-semibold text-gray-700">
              ⏰ Paradas mayores (minutos)
            </label>
            <input
              type="number"
              required
              min={0}
              value={machine.paradasMayores}
              onChange={(e) =>
                onUpdate(index, 'paradasMayores', e.target.value)
              }
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Ej: 30"
            />
          </div>

          <div className="bg-purple-50 p-2 rounded border border-purple-200">
            <label className="block mb-1 font-semibold text-gray-700">
              📋 Referencia
            </label>
            <select
              value={machine.reference}
              required
              onChange={(e) => onUpdate(index, 'reference', e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
          </div>

          <div className="bg-blue-50 p-2 rounded border border-blue-200">
            <label className="block mb-1 font-semibold text-gray-700">
              📝 Observaciones
            </label>
            <textarea
              value={machine.observaciones}
              onChange={(e) => onUpdate(index, 'observaciones', e.target.value)}
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingresa observaciones relevantes..."
            />
          </div>
        </div>
      </div>

      {/* VALIDACIÓN EN TIEMPO REAL */}
      <div className="mt-2 space-y-1">
        {machine.horometroFinal &&
          machine.horometroInicial &&
          Number(machine.horometroFinal) < Number(machine.horometroInicial) && (
            <div className="p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
              ⚠️ El horómetro final no puede ser menor que el inicial
            </div>
          )}

        {excedeLimite && (
          <div className="p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
            ❌ Las horas trabajadas no pueden exceder 16 horas.
            <strong> Actual: {horasTrabajadas.toFixed(2)} horas</strong>
          </div>
        )}

        {horasTrabajadas > 0 && !excedeLimite && (
          <div className="p-2 bg-green-100 border border-green-300 rounded text-green-700 text-sm">
            ✅ Horas trabajadas válidas:{' '}
            <strong>{horasTrabajadas.toFixed(2)} horas</strong>
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
  const [productivityAnalysis, setProductivityAnalysis] = useState<
    ProductivityAnalysis[]
  >([]);
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);
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

    // Consulta para obtener registros del día actual
    const q = query(
      collection(db, 'registro_horometros'),
      where('fecha', '>=', `${fechaHoy}T00:00:00`),
      where('fecha', '<=', `${fechaHoy}T23:59:59`)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const operarios: string[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as RegistroCard;

        // Agregar operario a la lista de registrados hoy
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

  // Función para analizar la productividad
  const analyzeProductivity = (
    registro: RegistroCard
  ): ProductivityAnalysis[] => {
    const analysis: ProductivityAnalysis[] = [];

    registro.machines.forEach((machine) => {
      const machineAnalysis: ProductivityAnalysis = {
        machine: machine.machine,
        issues: [],
        recommendations: [],
        efficiency: 0
      };

      // Calcular horas trabajadas
      const horasTrabajadas =
        parseFloat(machine.horometroFinal) -
        parseFloat(machine.horometroInicial);

      // Obtener el estándar de la máquina
      const standard = standards[machine.machine];

      if (standard) {
        const standardEfficiency = parseFloat(standard.efficiency);
        const horasAsignadas =
          typeof machine.horasAsignadas === 'string'
            ? parseFloat(machine.horasAsignadas)
            : (machine.horasAsignadas as number);

        // Calcular eficiencia
        machineAnalysis.efficiency =
          (horasTrabajadas / (standardEfficiency * horasAsignadas)) * 100;

        // Detectar problemas basados en la eficiencia
        if (machineAnalysis.efficiency < 70) {
          machineAnalysis.issues.push(
            `Baja eficiencia (${machineAnalysis.efficiency.toFixed(2)}%)`
          );
          machineAnalysis.recommendations.push('Revisar proceso de operación');
          machineAnalysis.recommendations.push(
            'Verificar estado de la máquina'
          );
          machineAnalysis.recommendations.push(
            'Capacitar al operario en mejores prácticas'
          );
        }
      }

      // Analizar paradas mayores
      const paradasMayores = parseFloat(machine.paradasMayores);
      if (paradasMayores > 60) {
        machineAnalysis.issues.push(
          `Tiempo excesivo de paradas (${paradasMayores} minutos)`
        );
        machineAnalysis.recommendations.push(
          'Programar mantenimiento preventivo'
        );
        machineAnalysis.recommendations.push(
          'Revisar planificación de producción'
        );
      }

      // Analizar observaciones para detectar problemas comunes
      if (machine.observaciones) {
        const obs = machine.observaciones.toLowerCase();

        if (obs.includes('mantenimiento') || obs.includes('reparación')) {
          machineAnalysis.issues.push('Problemas de mantenimiento reportados');
          machineAnalysis.recommendations.push(
            'Crear plan de mantenimiento preventivo'
          );
        }

        if (obs.includes('lubricación') || obs.includes('aceite')) {
          machineAnalysis.issues.push('Problemas de lubricación');
          machineAnalysis.recommendations.push(
            'Revisar sistema de lubricación'
          );
          machineAnalysis.recommendations.push(
            'Establecer programa de lubricación'
          );
        }

        if (
          obs.includes('electric') ||
          obs.includes('corriente') ||
          obs.includes('voltaje')
        ) {
          machineAnalysis.issues.push('Problemas eléctricos');
          machineAnalysis.recommendations.push('Revisar instalación eléctrica');
          machineAnalysis.recommendations.push(
            'Verificar estabilizadores de voltaje'
          );
        }
      }

      if (machineAnalysis.issues.length > 0) {
        analysis.push(machineAnalysis);
      }
    });

    return analysis;
  };

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

      // Validar campos numéricos
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

      // Validar que el horómetro final no sea menor que el inicial
      if (Number(machine.horometroFinal) < Number(machine.horometroInicial)) {
        alert(
          `El horómetro final no puede ser menor que el inicial en la máquina: ${machine.machine}`
        );
        return;
      }

      // Validar referencia
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

      // Analizar productividad después de enviar
      const analysis = analyzeProductivity(registro);
      setProductivityAnalysis(analysis);
      setUltimoOperarioRegistrado(registro.operatorCode);

      if (analysis.length > 0) {
        setShowAnalysis(true);
      }

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

    // Ajustar a hora local de Bogotá
    const offset = -5; // UTC-5
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const bogotaTime = new Date(utc + offset * 3600000);

    // Formatear en ISO pero sin la Z (hora local)
    const year = bogotaTime.getFullYear();
    const month = String(bogotaTime.getMonth() + 1).padStart(2, '0');
    const day = String(bogotaTime.getDate()).padStart(2, '0');
    const hours = String(bogotaTime.getHours()).padStart(2, '0');
    const minutes = String(bogotaTime.getMinutes()).padStart(2, '0');
    const seconds = String(bogotaTime.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col items-center p-5 w-full bg-gray-200 rounded-2xl backgroundForm">
      {/* PANEL DE CONFIRMACIÓN DE ENVÍO */}
      {ultimoOperarioRegistrado && (
        <div className="w-full max-w-2xl mb-4 bg-green-600 p-3 border-white rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-white text-lg mr-2">✅</span>
              <span className="text-white font-semibold">
                Registro enviado exitosamente para el operario:{' '}
                {ultimoOperarioRegistrado}
              </span>
            </div>
            <button
              onClick={() => setUltimoOperarioRegistrado('')}
              className="text-white text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Panel de estado compacto */}
      <div className="w-full max-w-2xl mb-4 bg-blue-900 p-2 border-white rounded-lg">
        <div className="flex justify-between items-center">
          <h3
            className="text-sm font-semibold text-white cursor-pointer"
            onClick={() => setShowStatusPanel(!showStatusPanel)}
          >
            Estado de registros hoy ({operariosRegistradosHoy.length}/
            {assignMachineUser.length})
          </h3>
          <span
            className="text-xs text-white cursor-pointer"
            onClick={() => setShowStatusPanel(!showStatusPanel)}
          >
            {showStatusPanel ? '▲' : '▼'}
          </span>
        </div>

        {showStatusPanel && (
          <div className="mt-2 grid grid-cols-4 gap-1">
            {assignMachineUser.map((operario) => {
              const haRegistrado = operariosRegistradosHoy.includes(
                operario.operator
              );

              return (
                <div
                  key={operario.id}
                  className="flex items-center p-1 bg-blue-800 rounded"
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
                  <span className="ml-1 text-xs text-white truncate">
                    {operario.operator}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Panel de análisis de productividad */}
      {showAnalysis && productivityAnalysis.length > 0 && (
        <div className="w-full max-w-2xl mb-4 bg-yellow-800 p-4 border-white rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-white">
              Análisis de Productividad
            </h3>
            <button
              onClick={() => setShowAnalysis(false)}
              className="text-white text-lg"
            >
              ×
            </button>
          </div>

          <div className="space-y-3">
            {productivityAnalysis.map((analysis, index) => (
              <div key={index} className="bg-yellow-100 p-3 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Máquina: {analysis.machine}
                  {analysis.efficiency > 0 && (
                    <span className="ml-2 text-sm">
                      (Eficiencia: {analysis.efficiency.toFixed(2)}%)
                    </span>
                  )}
                </h4>

                {analysis.issues.length > 0 && (
                  <div className="mb-2">
                    <h5 className="font-medium text-red-600">
                      Problemas detectados:
                    </h5>
                    <ul className="list-disc list-inside text-red-700">
                      {analysis.issues.map((issue, i) => (
                        <li key={i}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {analysis.recommendations.length > 0 && (
                  <div>
                    <h5 className="font-medium text-green-600">
                      Recomendaciones:
                    </h5>
                    <ul className="list-disc list-inside text-green-700">
                      {analysis.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 p-2 bg-yellow-200 rounded">
            <h5 className="font-semibold text-yellow-800">
              Estrategias generales para mejorar la productividad:
            </h5>
            <ul className="list-disc list-inside text-yellow-900 pl-4">
              <li>Implementar mantenimiento preventivo programado</li>
              <li>Capacitar operarios en técnicas de eficiencia</li>
              <li>Establecer protocolos rápidos para resolver paradas</li>
              <li>
                Crear banco de repuestos críticos para reducir tiempos de espera
              </li>
              <li>
                Implementar sistema de alertas tempranas para fallas recurrentes
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="mb-4 w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <label className="block text-white text-xs font-bold mb-2 uppercase tracking-wide">
            Buscar código de operario
          </label>
          {operatorCode && (
            <div className="flex items-center">
              <EstadoRegistroGlobo
                operario={operatorCode}
                operariosRegistradosHoy={operariosRegistradosHoy}
              />
              <span className="ml-1 text-xs text-white">
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
          placeholder="Código de operario"
          className="block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-2 no-spinner"
        />

        {/* Seleccionar fecha */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-white text-xs font-bold mb-2 uppercase tracking-wide">
              Fecha de registro
            </label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-2 no-spinner"
            />
          </div>
        </div>
        <button
          onClick={handleAddRegistro}
          className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
        >
          Ver mis maquinas
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddRegistro();
        }}
        className="w-full max-w-2xl"
      >
        {registros.map((registro) => (
          <div
            key={registro.id}
            className="border-2 border-blue-500 p-4 mb-6 bg-white rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center mb-4 p-3 bg-blue-50 rounded border border-blue-200">
              <div>
                <p className="font-semibold text-blue-900">
                  📅 Fecha: {registro.fecha}
                </p>
                <p className="font-semibold text-blue-900">
                  👤 Código: {registro.operatorCode}
                </p>
                <p className="text-sm text-blue-700">
                  🏭 Máquinas asignadas: {registro.machines.length}
                </p>
              </div>
              <button
                onClick={() => handleEnviarRegistro(registro.id)}
                disabled={registrosEnProceso.has(registro.id)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  registrosEnProceso.has(registro.id)
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {registrosEnProceso.has(registro.id)
                  ? '⏳ Enviando...'
                  : '🚀 Enviar Registro'}
              </button>
            </div>

            {/* LISTA MEJORADA DE MÁQUINAS */}
            <div className="space-y-4">
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

            {/* INSTRUCCIONES VISIBLES */}
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
              <h5 className="font-semibold text-yellow-800 mb-2">
                📋 Instrucciones importantes:
              </h5>
              <ul className="text-sm text-yellow-700 list-disc list-inside space-y-1">
                <li>
                  Verifica que estás ingresando datos en la máquina correcta
                </li>
                <li>El horómetro final debe ser mayor al inicial</li>
                <li>Las horas trabajadas no pueden exceder 16 horas</li>
                <li>Completa todos los campos antes de enviar</li>
                <li>Solo puedes enviar un registro por día</li>
              </ul>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default F1315;
