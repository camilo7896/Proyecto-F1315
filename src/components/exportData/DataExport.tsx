import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../lib/credentialFirebase';
import { useEffect, useState } from 'react';

type Machine = {
  horasAsignadas: string | number;
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
  observaciones: string;
};

type RegisterProps = {
  id: string;
  fecha: string;
  operatorCode: string;
  machines: Machine[];
  reference?: string;
  majorStops?: string;
  totalHours?: string;
  // Información adicional
  editadoPor?: string;
  camposModificados?: string;
  fechaUltimaEdicion?: string;
  // Copia de los datos originales
  originalMachines?: Machine[];
};

const db = getFirestore(app);

const DataExport = () => {
  const [registros, setRegistros] = useState<RegisterProps[]>([]);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [operarioFiltro, setOperarioFiltro] = useState('');
  const [maquinaFiltro, setMaquinaFiltro] = useState('');

  useEffect(() => {
    const fetchRegisters = async () => {
      try {
        const dataregister = await getDocs(
          collection(db, 'registro_horometros')
        );
        const data = dataregister.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            fecha: d.fecha,
            machines: d.machines,
            operatorCode: d.operatorCode,
            reference: d.reference,
            majorStops: d.majorStops,
            totalHours: d.totalHours,
            editadoPor: d.editadoPor,
            camposModificados: d.camposModificados,
            fechaUltimaEdicion: d.fechaUltimaEdicion,
            originalMachines: d.originalMachines
          } as RegisterProps;
        });
        setRegistros(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRegisters();
  }, []);

  // Filtrar por rango de fechas y filtros adicionales
  const registrosFiltrados = () => {
    return registros.filter((r) => {
      const fechaR = new Date(r.fecha);
      const inicio = fechaInicio ? new Date(fechaInicio) : null;
      const fin = fechaFin ? new Date(fechaFin) : null;
      const fechaValida =
        (!inicio || fechaR >= inicio) && (!fin || fechaR <= fin);
      const operarioValido = operarioFiltro
        ? r.operatorCode.toLowerCase().includes(operarioFiltro.toLowerCase())
        : true;
      const maquinaValida = maquinaFiltro
        ? r.machines.some((m) =>
            m.machine.toLowerCase().includes(maquinaFiltro.toLowerCase())
          )
        : true;
      return fechaValida && operarioValido && maquinaValida;
    });
  };

  // Función para exportar en CSV
  const exportarCSV = () => {
    const datosFiltrados = registrosFiltrados();

    const headers = [
      'ID',
      'Fecha',
      'Máquina',
      'Operador',
      'Horómetro Inicial',
      'Horómetro Final',
      'Paradas mayores',
      'Observaciones',
      'Horas Asignadas',
      'editadoPor'
    ];

    const filas = datosFiltrados.flatMap((reg) =>
      reg.machines.map((mach) => [
        reg.id,
        reg.fecha,
        reg.operatorCode,
        mach.machine,
        mach.horometroInicial,
        mach.horometroFinal,
        reg.majorStops || '',
        mach.observaciones,
        reg.machines.reduce((sum, m) => sum + Number(m.horasAsignadas || 0), 0),
        reg.editadoPor ?? ''
      ])
    );

    const csvContent = [
      headers.join(','),
      ...filas.map((f) => f.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `registros_${fechaInicio || 'todos'}_${fechaFin || 'hoy'}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto backgroundForm text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Exportar registros por rango de fechas
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-white">
            Fecha inicial
          </label>
          <input
            type="date"
            className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium text-white">
            Fecha final
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>
      </div>

      {/* Filtros adicionales */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-white">Operario</label>
          <input
            type="text"
            placeholder="Operario"
            value={operarioFiltro}
            onChange={(e) => setOperarioFiltro(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium text-white">Máquina</label>
          <input
            type="text"
            placeholder="Máquina"
            value={maquinaFiltro}
            onChange={(e) => setMaquinaFiltro(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
        onClick={exportarCSV}
      >
        Exportar CSV
      </button>

      {/* Mostrar registros filtrados */}
      <div className="mt-6 max-h-64 overflow-y-auto border border-gray-200 rounded p-4">
        <h3 className="text-lg font-semibold mb-2">Registros filtrados:</h3>
        {registrosFiltrados().length === 0 ? (
          <p className="text-gray-500">
            No hay registros en ese rango de fechas.
          </p>
        ) : (
          <ul className="list-disc list-inside space-y-1 text-white">
            {registrosFiltrados().map((reg) => (
              <li key={reg.id} className="text-sm">
                <strong>{reg.fecha}</strong> - {reg.operatorCode}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DataExport;
