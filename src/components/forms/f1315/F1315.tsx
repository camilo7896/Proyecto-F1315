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

type MachineData = {
  machine: string;
  horometroInicial: string;
  horometroFinal: string;
  observaciones: string;
};

const F1315 = () => {
  const [assignMachineUser, setassignMachineUser] = useState<
    AssignMachineUser[]
  >([]);
  const [operatorCode, setOperatorCode] = useState('');
  const [filteredMachines, setFilteredMachines] = useState<string[]>([]);
  const [machineInputs, setMachineInputs] = useState<MachineData[]>([]);
  const [fecha, setFecha] = useState('');
  const [horasAsignadas, setHorasAsignadas] = useState('');
  const [paradasMayores, setParadasMayores] = useState('');

  useEffect(() => {
    const fetchAssignMachine = async () => {
      try {
        const querySnapShot = await getDocs(collection(db, 'assignments'));
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as AssignMachineUser[];
        setassignMachineUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAssignMachine();
  }, []);

  const handleSearch = (value: string) => {
    setOperatorCode(value);
    const found = assignMachineUser.find((entry) => entry.operator === value);
    if (found) {
      setFilteredMachines(found.machines);
      setMachineInputs(
        found.machines.map((machine) => ({
          machine,
          horometroInicial: '',
          horometroFinal: '',
          observaciones: ''
        }))
      );
    } else {
      setFilteredMachines([]);
      setMachineInputs([]);
    }
  };

  const handleInputChange = (
    index: number,
    field: keyof MachineData,
    value: string
  ) => {
    const updated = [...machineInputs];
    updated[index][field] = value;
    setMachineInputs(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      operatorCode,
      fecha,
      horasAsignadas,
      paradasMayores,
      machines: machineInputs,
      timestamp: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, 'registro_horometros'), payload);
      alert('Datos enviados correctamente ✅');
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
      alert('Error al guardar los datos ❌');
    }
  };

  return (
    <>
      <div className="flex p-5 w-full justify-center bg-gray-200 rounded-2xl backgroundForm">
        <form onSubmit={handleSubmit} className="w-full max-w-lg text-white">
          {/* Fecha y operador */}
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
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                Código de operario
              </label>
              <input
                type="number"
                value={operatorCode}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="000"
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4"
                required
              />
            </div>
          </div>

          {/* Horas y paradas */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                Horas asignadas
              </label>
              <input
                type="text"
                value={horasAsignadas}
                onChange={(e) => setHorasAsignadas(e.target.value)}
                placeholder="0"
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                Paradas mayores
              </label>
              <input
                type="text"
                value={paradasMayores}
                onChange={(e) => setParadasMayores(e.target.value)}
                placeholder="0"
                className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4"
                required
              />
            </div>
          </div>

          {/* Máquinas asignadas */}
          {machineInputs.map((machineData, index) => (
            <div
              key={index}
              className="flex flex-wrap -mx-3 border border-amber-400 p-3 mb-2"
            >
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Horómetro inicial
                </label>
                <input
                  type="number"
                  placeholder="00000000"
                  value={machineData.horometroInicial}
                  onChange={(e) =>
                    handleInputChange(index, 'horometroInicial', e.target.value)
                  }
                  className="appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4"
                  required
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Máquina
                </label>
                <input
                  type="text"
                  value={machineData.machine}
                  readOnly
                  className="appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4"
                  required
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Horómetro final
                </label>
                <input
                  type="number"
                  placeholder="00000000"
                  value={machineData.horometroFinal}
                  onChange={(e) =>
                    handleInputChange(index, 'horometroFinal', e.target.value)
                  }
                  className="appearance-none block w-full bg-gray-200 text-blue-950 border border-gray-200 rounded py-3 px-4"
                  required
                />
              </div>

              <div className="w-full px-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Observaciones
                </label>
                <textarea
                  placeholder="..."
                  value={machineData.observaciones}
                  onChange={(e) =>
                    handleInputChange(index, 'observaciones', e.target.value)
                  }
                  className="appearance-none block w-full bg-gray-200 text-blue-950 border border-blue-950 rounded py-3 px-4"
                />
              </div>
            </div>
          ))}

          {/* Botón enviar */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default F1315;
