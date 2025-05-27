import React, { useEffect, useState } from 'react';
import app from '../../lib/credentialFirebase';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  Timestamp
} from 'firebase/firestore';

const db = getFirestore(app);

interface Machine {
  id: string;
  abbreviation?: string;
  // Add other properties as needed, e.g. name?: string;
  [key: string]: unknown;
}

const AssignMachines = () => {
  const [operatorName, setOperatorName] = useState('');
  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);
  const [machines, setMachines] = useState<Machine[]>([]);
  const [operators, setOperators] = useState();

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'machines'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(data);
        setMachines(data);

        // Consultar usuarios
        const userDataMachine = await getDocs(collection(db, 'operators'));
        const dataUser = userDataMachine.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(dataUser);
        setOperators(operators);
      } catch (error) {
        console.error('Error al obtener máquinas:', error);
      }
    };

    fetchMachines();
  }, []);

  const handleCheckboxChange = (id: string) => {
    setSelectedMachines((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newAssignment = {
      operator: operatorName.toUpperCase(),
      machines: selectedMachines,
      timestamp: Timestamp.now()
    };

    try {
      await addDoc(collection(db, 'assignments'), newAssignment);
      console.log('Asignación guardada correctamente:', newAssignment);

      // Limpia formulario
      setOperatorName('');
      setSelectedMachines([]);
      alert('Asignación guardada exitosamente');
    } catch (error) {
      console.error('Error al guardar la asignación:', error);
      alert('Hubo un error al guardar la asignación');
    }
  }

  return (
    <div className="p-6 rounded-lg shadow-md w-full max-w-lg mx-auto backgroundForm">
      <h2 className="text-xl font-bold mb-4 text-white">Asignar Máquinas</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-white">Operario</label>
          <input
            type="text"
            value={operatorName}
            onChange={(e) => setOperatorName(e.target.value)}
            className="w-full border px-3 bg-gray-200 py-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-white">Seleccionar maquinas</label>
          <div className="space-y-2 text-white pl-2">
            {machines &&
              machines.map((machine) =>
                machine.abbreviation ? (
                  <div key={machine.abbreviation}>
                    <input
                      type="checkbox"
                      id={machine.abbreviation}
                      onChange={() =>
                        handleCheckboxChange(machine.abbreviation!)
                      }
                    />
                    <label className="pl-2" htmlFor={machine.id}>
                      {machine.abbreviation}
                    </label>
                  </div>
                ) : null
              )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Asignar
        </button>
      </form>
    </div>
  );
};

export default AssignMachines;
