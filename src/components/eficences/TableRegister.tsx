import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import app from '../../lib/credentialFirebase';

const db = getFirestore(app);

type Standard = {
  abbreviation: string;
  date: string;
  efficiency: string;
  machineName: string;
};

type Machine = {
  horasAsignadas: number;
  horometroFinal: string;
  horometroInicial: string;
  machine: string; // abreviatura
  observaciones: string;
  standard?: Standard;
};

type Registro = {
  fecha: string;
  machines: Machine[];
  operatorCode: string;
  paradasMayores: string;
  timestamp: string;
  id: string; // para key
};

const DataTableCompleta = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const snap = await getDocs(collection(db, 'registro_horometros'));
        const data = snap.docs.map((doc) => {
          const docData = doc.data() as Omit<Registro, 'id'>;
          return {
            id: doc.id,
            ...docData
          } as Registro;
        });
        setRegistros(data);
      } catch (e) {
        console.error('Error fetching registros:', e);
      }
    };
    fetchRegistros();
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">Listado de Registros</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-2 py-1">ID</th>
            <th className="border border-gray-300 px-2 py-1">Operador</th>
            <th className="border border-gray-300 px-2 py-1">Fecha</th>
            <th className="border border-gray-300 px-2 py-1">
              Paradas Mayores
            </th>
            <th className="border border-gray-300 px-2 py-1">Máquinas</th>
          </tr>
        </thead>
        <tbody>
          {registros.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-4">
                No hay registros.
              </td>
            </tr>
          ) : (
            registros.map((reg) => (
              <tr key={reg.id} className="border-b border-gray-200">
                {/* ID */}
                <td className="border border-gray-300 px-2 py-1">{reg.id}</td>
                {/* Operador */}
                <td className="border border-gray-300 px-2 py-1">
                  {reg.operatorCode}
                </td>
                {/* Fecha */}
                <td className="border border-gray-300 px-2 py-1">
                  {reg.fecha}
                </td>
                {/* Paradas Mayores */}
                <td className="border border-gray-300 px-2 py-1">
                  {reg.paradasMayores}
                </td>
                {/* Máquinas */}
                <td className="border border-gray-300 px-2 py-1">
                  {reg.machines && reg.machines.length > 0 ? (
                    reg.machines.map((m, index) => (
                      <div
                        key={index}
                        className="mb-2 border p-2 rounded bg-gray-50"
                      >
                        <p>
                          <strong>Abreviatura:</strong> {m.machine}
                        </p>
                        {m.standard && (
                          <div className="text-sm mb-1">
                            <p>
                              <strong>Nombre máquina:</strong>{' '}
                              {m.standard.machineName}
                            </p>
                            <p>
                              <strong>Fecha:</strong> {m.standard.date}
                            </p>
                            <p>
                              <strong>Eficiencia:</strong>{' '}
                              {m.standard.efficiency}
                            </p>
                          </div>
                        )}
                        <p>
                          <strong>Horas asignadas:</strong> {m.horasAsignadas}
                        </p>
                        <p>
                          <strong>Horómetro inicial:</strong>{' '}
                          {m.horometroInicial}
                        </p>
                        <p>
                          <strong>Horómetro final:</strong> {m.horometroFinal}
                        </p>
                        <p>
                          <strong>Observaciones:</strong> {m.observaciones}
                        </p>
                      </div>
                    ))
                  ) : (
                    <em>No hay máquinas</em>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableCompleta;
