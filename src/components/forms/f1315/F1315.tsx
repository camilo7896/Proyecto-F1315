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
};

type RegistroCard = {
  id: string;
  fecha: string;
  operatorCode: string;
  machines: MachineData[];
  paradasMayores: string;
};

// Nuevo tipo para análisis de productividad
type ProductivityAnalysis = {
  machine: string;
  issues: string[];
  recommendations: string[];
  efficiency: number;
};

const F1315 = () => {
  const [assignMachineUser, setAssignMachineUser] = useState<
    AssignMachineUser[]
  >([]);
  const [operatorCode, setOperatorCode] = useState('');
  const [, setMachinesAsignadas] = useState<string[]>([]);
  const [machineInputs, setMachineInputs] = useState<MachineData[]>([]);
  const [fecha, setFecha] = useState('');
  const [ultimosHorometros, setUltimosHorometros] = useState<
    Record<string, string>
  >({});
  const [operariosRegistradosHoy, setOperariosRegistradosHoy] = useState<
    string[]
  >([]);
  const [showStatusPanel, setShowStatusPanel] = useState(false);
  const [productivityAnalysis, setProductivityAnalysis] = useState<
    ProductivityAnalysis[]
  >([]);
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Obtener la fecha actual en formato YYYY-MM-DD (Colombia)
  const obtenerFechaActualColombia = () => {
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
    const fetchUltimosHorometros = async () => {
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

  const [standards, setStandards] = useState<Record<string, MachineStandard>>(
    {}
  );
  const [registros, setRegistros] = useState<RegistroCard[]>([]);
  const [referencias, setReferencias] = useState<
    { nombre: string; codigo: string }[]
  >([]);

  useEffect(() => {
    const fetchReferencias = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'referencias'));
        const data = snapshot.docs.map(
          (doc) => doc.data() as { nombre: string; codigo: string }
        );
        setReferencias(data);
      } catch (error) {
        console.error('Error al cargar referencias:', error);
      }
    };

    fetchReferencias();
  }, []);

  useEffect(() => {
    const fetchAssignMachine = async () => {
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

  const fetchStandards = async () => {
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
  const analyzeProductivity = (registro: RegistroCard) => {
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

  const handleSearch = (value: string) => {
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

  const handleAddRegistro = () => {
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

  const handleEnviarRegistro = async (registroId: string) => {
    const registro = registros.find((r) => r.id === registroId);
    if (!registro) return;

    // Validar campos principales
    if (
      !registro.operatorCode?.toString().trim() ||
      !registro.fecha?.toString().trim()
    ) {
      alert('Por favor completa el código de operador y la fecha.');
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

      if (analysis.length > 0) {
        setShowAnalysis(true);
      }

      alert('Registro enviado correctamente ✅');
      setRegistros(registros.filter((r) => r.id !== registroId));
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
      alert('Error al guardar los datos ❌');
    }
  };

  // hora colombia
  const obtenerFechaColombia = () => {
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

  // Componente de globo indicador
  const EstadoRegistroGlobo = ({ operario }: { operario: string }) => {
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

  return (
    <div className="flex flex-col items-center p-5 w-full bg-gray-200 rounded-2xl backgroundForm">
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
                  <EstadoRegistroGlobo operario={operario.operator} />
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
              <EstadoRegistroGlobo operario={operatorCode} />
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
            className="border border-amber-400 p-3 mb-4 bg-white rounded"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold">Fecha: {registro.fecha}</p>
                <p className="font-semibold">Código: {registro.operatorCode}</p>
              </div>
              <button
                onClick={() => handleEnviarRegistro(registro.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Enviar
              </button>
            </div>

            {registro.machines.map((m, index) => (
              <div key={index} className="border p-2 mb-2 rounded bg-gray-50">
                <h4 className="font-semibold mb-1">{m.machine}</h4>
                {standards[m.machine] && (
                  <div className="mb-2 text-sm border p-2 rounded bg-gray-100">
                    <p>
                      <strong>Abreviatura:</strong>{' '}
                      {standards[m.machine].abbreviation}
                    </p>
                    <p>
                      <strong>Nombre máquina:</strong>{' '}
                      {standards[m.machine].machineName}
                    </p>
                    <p>
                      <strong>Fecha estándar:</strong>{' '}
                      {standards[m.machine].date}
                    </p>
                    <p>
                      <strong>Estándar:</strong>{' '}
                      {standards[m.machine].efficiency}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <label className="block mb-1">Horas asignadas</label>
                    <input
                      type="number"
                      min={0}
                      required
                      value={m.horasAsignadas}
                      onChange={(e) => {
                        const value = e.target.value;
                        setRegistros((prev) =>
                          prev.map((reg) =>
                            reg.id === registro.id
                              ? {
                                  ...reg,
                                  machines: reg.machines.map((mm, i) =>
                                    i === index
                                      ? { ...mm, horasAsignadas: value }
                                      : mm
                                  )
                                }
                              : reg
                          )
                        );
                      }}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Horómetro inicial</label>
                    <input
                      type="number"
                      required
                      min={3}
                      value={m.horometroInicial}
                      // readOnly={!!m.horometroInicial} // 👉 será editable si está vacío
                      onChange={(e) => {
                        const value = e.target.value;
                        setRegistros((prev) =>
                          prev.map((reg) =>
                            reg.id === registro.id
                              ? {
                                  ...reg,
                                  machines: reg.machines.map((mm, i) =>
                                    i === index
                                      ? { ...mm, horometroInicial: value }
                                      : mm
                                  )
                                }
                              : reg
                          )
                        );
                      }}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Horómetro final</label>
                    <input
                      type="number"
                      required
                      min={3}
                      value={m.horometroFinal}
                      onChange={(e) => {
                        const value = e.target.value;
                        setRegistros((prev) =>
                          prev.map((reg) =>
                            reg.id === registro.id
                              ? {
                                  ...reg,
                                  machines: reg.machines.map((mm, i) =>
                                    i === index
                                      ? { ...mm, horometroFinal: value }
                                      : mm
                                  )
                                }
                              : reg
                          )
                        );
                      }}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">
                      Paradas mayores en minutos
                    </label>
                    <input
                      type="number"
                      required
                      value={m.paradasMayores}
                      onChange={(e) => {
                        const value = e.target.value;
                        setRegistros((prev) =>
                          prev.map((reg) =>
                            reg.id === registro.id
                              ? {
                                  ...reg,
                                  machines: reg.machines.map((mm, i) =>
                                    i === index
                                      ? { ...mm, paradasMayores: value }
                                      : mm
                                  )
                                }
                              : reg
                          )
                        );
                      }}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  <select
                    value={m.reference}
                    required
                    onChange={(e) => {
                      const value = e.target.value;
                      setRegistros((prev) =>
                        prev.map((reg) =>
                          reg.id === registro.id
                            ? {
                                ...reg,
                                machines: reg.machines.map((mm, i) =>
                                  i === index ? { ...mm, reference: value } : mm
                                )
                              }
                            : reg
                        )
                      );
                    }}
                    className="w-full border border-gray-300 rounded px-2 py-1"
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

                  <div className="col-span-2">
                    <label className="block mb-1">Observaciones</label>
                    <textarea
                      value={m.observaciones}
                      onChange={(e) => {
                        const value = e.target.value;
                        setRegistros((prev) =>
                          prev.map((reg) =>
                            reg.id === registro.id
                              ? {
                                  ...reg,
                                  machines: reg.machines.map((mm, i) =>
                                    i === index
                                      ? { ...mm, observaciones: value }
                                      : mm
                                  )
                                }
                              : reg
                          )
                        );
                      }}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
};

export default F1315;
