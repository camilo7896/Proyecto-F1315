import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import db from '../../lib/credentialFirebase';
import EficienciaChart from './EficienciaChart';

interface Machine {
  horometroInicial: number;
  horometroFinal: number;
  horasAsignadas: number;
  machine: string;
  [key: string]: unknown;
}

interface Registro {
  machines: Machine[];
  [key: string]: unknown;
}

const EficienciaPage = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [loading, setLoading] = useState(true);

  // Estándares por máquina
  const machineStandards = {
    PUN3401: 1.5,
    PUN3402: 2
    // Añade más máquinas si es necesario
  };

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const firestore = getFirestore(db);
        const snapshot = await getDocs(
          collection(firestore, 'registro_horometros')
        );
        const data = snapshot.docs.map((doc) => {
          const registro = doc.data();
          // Normaliza datos: convierte campos a números si es posible

          const machines: Machine[] = (registro.machines || []).map(
            (machine: {
              horometroInicial: string | number;
              horometroFinal: string | number;
              horasAsignadas: string | number;
              machine?: string;
              [key: string]: unknown;
            }): Machine => ({
              ...machine,
              horometroInicial:
                parseFloat(String(machine.horometroInicial)) || 0,
              horometroFinal: parseFloat(String(machine.horometroFinal)) || 0,
              horasAsignadas: parseFloat(String(machine.horasAsignadas)) || 0,
              machine:
                typeof machine.machine === 'string' ? machine.machine : '' // Ensure 'machine' property exists
            })
          );
          return { ...registro, machines };
        });
        setRegistros(data);
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistros();
  }, []);

  if (loading) return <p className="text-center my-4">Cargando datos...</p>;

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">
        Eficiencia Promedio por Máquina
      </h1>
      <EficienciaChart
        registrosFiltrados={registros}
        machineStandards={machineStandards}
      />
    </div>
  );
};

export default EficienciaPage;
