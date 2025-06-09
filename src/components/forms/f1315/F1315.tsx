import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import app from '../../../lib/credentialFirebase';
import { useEffect, useState } from 'react';

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
  standard?: MachineStandard;
};

type RegistroCard = {
  id: string; // unique ID para la tarjeta
  fecha: string;
  operatorCode: string;
  machines: MachineData[];
  paradasMayores: string;
};

const F1315 = () => {
  const [assignMachineUser, setAssignMachineUser] = useState<
    AssignMachineUser[]
  >([]);
  const [operatorCode, setOperatorCode] = useState('');
  const [, setMachinesAsignadas] = useState<string[]>([]);
  const [machineInputs, setMachineInputs] = useState<MachineData[]>([]);
  const [fecha, setFecha] = useState('');
  const [paradasMayores, setParadasMayores] = useState('');
  const [standards, setStandards] = useState<Record<string, MachineStandard>>(
    {}
  );
  const [registros, setRegistros] = useState<RegistroCard[]>([]); // Lista de registros (tarjetas)

  // Cargar asignaciones
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

  // Cargar estándares
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

  // Buscar operario y crear una nueva tarjeta
  const handleSearch = (value: string) => {
    setOperatorCode(value);
    const found = assignMachineUser.find((entry) => entry.operator === value);
    if (found) {
      setMachinesAsignadas(found.machines);
      setMachineInputs(
        found.machines.map((machine) => ({
          machine,
          horometroInicial: '',
          horometroFinal: '',
          horasAsignadas: '',
          observaciones: ''
        }))
      );
    } else {
      setMachinesAsignadas([]);
      setMachineInputs([]);
    }
  };

  // Añadir nuevo registro (tarjeta)
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
      paradasMayores
    };
    setRegistros([...registros, nuevoRegistro]);
    // Limpiar inputs
    setFecha('');
    setOperatorCode('');
    setMachinesAsignadas([]);
    setMachineInputs([]);
    setParadasMayores('');
  };

  // Enviar y eliminar registro
  const handleEnviarRegistro = async (registroId: string) => {
    const registro = registros.find((r) => r.id === registroId);
    if (!registro) return;

    const payload = {
      operatorCode: registro.operatorCode,
      fecha: registro.fecha,
      paradasMayores: registro.paradasMayores,
      machines: registro.machines,
      timestamp: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, 'registro_horometros'), payload);
      alert('Registro enviado correctamente ✅');
      setRegistros(registros.filter((r) => r.id !== registroId));
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
      alert('Error al guardar los datos ❌');
    }
  };

  return (
    <div className="flex p-5 w-full justify-center bg-gray-200 rounded-2xl backgroundForm flex-col items-center">
      {/* Input de búsqueda */}
      <div className="mb-4 w-full max-w-2xl">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
          Buscar código de operario
        </label>
        <input
          type="number"
          value={operatorCode}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Código de operario"
          className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4 mb-2"
        />
        <button
          onClick={handleAddRegistro}
          className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
        >
          Ver mis maquinas
        </button>
      </div>

      {/* Formulario principal para fecha y paradas */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddRegistro();
        }}
        className="w-full max-w-2xl"
      >
        {/* Fecha */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
              Fecha
            </label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4"
              required
            />
          </div>
        </div>

        {/* Mostrar tarjetas de registros */}
        {registros.map((registro) => (
          <div
            key={registro.id}
            className="border border-amber-400 p-3 mb-4 bg-white rounded"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold mb-1">Fecha: {registro.fecha}</p>
                <p className="font-semibold mb-1">
                  Código: {registro.operatorCode}
                </p>
                <p className="text-sm mb-2">
                  Paradas mayores: {registro.paradasMayores}
                </p>
              </div>
              <button
                onClick={() => handleEnviarRegistro(registro.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Enviar
              </button>
            </div>
            {/* Datos de máquinas */}
            {registro.machines.map((m, index) => (
              <div key={index} className="border p-2 mb-2 rounded bg-gray-50">
                <h4 className="font-semibold mb-1">{m.machine}</h4>
                {/* Datos del estándar */}
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
                      <strong>Eficiencia:</strong>{' '}
                      {standards[m.machine].efficiency}
                    </p>
                  </div>
                )}
                {/* Inputs editables */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {/* Horas asignadas */}
                  <div>
                    <label className="block mb-1">Horas asignadas</label>
                    <input
                      type="number"
                      min={0}
                      value={
                        registros.find((r) => r.id === registro.id)?.machines?.[
                          index
                        ]?.horasAsignadas ?? ''
                      }
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const newRegistros = registros.map((reg) => {
                          if (reg.id !== registro.id) return reg;
                          return {
                            ...reg,
                            machines: reg.machines.map((m2, i) => {
                              if (i !== index) return m2;
                              return {
                                ...m2,
                                horasAsignadas: newValue
                              };
                            })
                          };
                        });
                        setRegistros(newRegistros);
                      }}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  {/* Horómetro inicial */}
                  <div>
                    <label className="block mb-1">Horómetro inicial</label>
                    <input
                      type="number"
                      placeholder="00000000"
                      value={m.horometroInicial}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const newRegistros = registros.map((reg) => {
                          if (reg.id !== registro.id) return reg;
                          return {
                            ...reg,
                            machines: reg.machines.map((m2, i) => {
                              if (i !== index) return m2;
                              return { ...m2, horometroInicial: newValue };
                            })
                          };
                        });
                        setRegistros(newRegistros);
                      }}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  {/* Horómetro final */}
                  <div>
                    <label className="block mb-1">Horómetro final</label>
                    <input
                      type="number"
                      placeholder="00000000"
                      value={m.horometroFinal}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const newRegistros = registros.map((reg) => {
                          if (reg.id !== registro.id) return reg;
                          return {
                            ...reg,
                            machines: reg.machines.map((m2, i) => {
                              if (i !== index) return m2;
                              return { ...m2, horometroFinal: newValue };
                            })
                          };
                        });
                        setRegistros(newRegistros);
                      }}
                      className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  {/* Observaciones */}
                  <div className="col-span-2">
                    <label className="block mb-1">Observaciones</label>
                    <textarea
                      placeholder="..."
                      value={m.observaciones}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const newRegistros = registros.map((reg) => {
                          if (reg.id !== registro.id) return reg;
                          return {
                            ...reg,
                            machines: reg.machines.map((m2, i) => {
                              if (i !== index) return m2;
                              return { ...m2, observaciones: newValue };
                            })
                          };
                        });
                        setRegistros(newRegistros);
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
