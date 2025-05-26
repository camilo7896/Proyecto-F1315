import React, { useState } from 'react';

const machinesList = [
  { id: 'F1315', name: 'Excavator F1315' },
  { id: 'F1400', name: 'Bulldozer F1400' },
  { id: 'F1200', name: 'Loader F1200' }
];

const AssignMachines = () => {
  const [operatorName, setOperatorName] = useState('');
  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelectedMachines((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const assignment = {
      operator: operatorName,
      machines: selectedMachines
    };
    console.log('Assignment:', assignment);

    // Aquí iría tu lógica para enviar a backend
    // Reset
    setOperatorName('');
    setSelectedMachines([]);
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
            {machinesList &&
              machinesList.map((machine) => (
                <div key={machine.id}>
                  <input
                    type="checkbox"
                    id={machine.id}
                    onChange={() => handleCheckboxChange(machine.id)}
                  />
                  <label className="pl-2" htmlFor={machine.id}>
                    {machine.name}
                  </label>
                </div>
              ))}
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
