import '../../App.scss';
const EficencePicado = () => {
  const data = [
    {
      date: '2025-07-24',
      machine: 'F1315',
      horometroStart: 120,
      horometroEnd: 180,
      reference: 'REF-001',
      majorStops: 'No fuel for 30 min',
      observations: 'Normal operation',
      assignedHours: 8,
      totalHours: 6
    },
    {
      date: '2025-07-24',
      machine: 'F1400',
      horometroStart: 100,
      horometroEnd: 160,
      reference: 'REF-002',
      majorStops: 'Broken belt (1h)',
      observations: 'Repair completed',
      assignedHours: 8,
      totalHours: 7
    },
    {
      date: '2025-07-23',
      machine: 'F1200',
      horometroStart: 50,
      horometroEnd: 110,
      reference: 'REF-003',
      majorStops: 'Operator late',
      observations: 'Started 1h late',
      assignedHours: 8,
      totalHours: 5
    }
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Eficencias</h2>
      <table className="min-w-full border border-gray-300 text-sm text-left">
        <thead className="backgroundForm text-white">
          <tr>
            <th className="px-3 py-2 border">Fecha</th>
            <th className="px-3 py-2 border">Maquina</th>
            <th className="px-3 py-2 border">Horometro inicial</th>
            <th className="px-3 py-2 border">Horomerto final</th>
            <th className="px-3 py-2 border">Referencia</th>
            <th className="px-3 py-2 border">Paradas mayores</th>
            <th className="px-3 py-2 border">Observaciones</th>
            <th className="px-3 py-2 border">Horas asignadas</th>
            <th className="px-3 py-2 border">Total horas</th>
            <th className="px-3 py-2 border">Eficiencia en horas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-3 py-2 border">{entry.date}</td>
              <td className="px-3 py-2 border">{entry.machine}</td>
              <td className="px-3 py-2 border">{entry.horometroStart}</td>
              <td className="px-3 py-2 border">{entry.horometroEnd}</td>
              <td className="px-3 py-2 border">{entry.reference}</td>
              <td className="px-3 py-2 border">{entry.majorStops}</td>
              <td className="px-3 py-2 border">{entry.observations}</td>
              <td className="px-3 py-2 border">{entry.assignedHours}</td>
              <td className="px-3 py-2 border">{entry.totalHours}</td>
              <td className="px-3 py-2 border">{entry.totalHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EficencePicado;
