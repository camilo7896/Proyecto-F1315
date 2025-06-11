import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

interface Machine {
  horometroInicial: number;
  horometroFinal: number;
  horasAsignadas: number;
  machine: string;
}

interface Registro {
  machines: Machine[];
}

interface EficienciaChartProps {
  registrosFiltrados: Registro[];
  machineStandards: { [machine: string]: string | number };
}

const EficienciaChart: React.FC<EficienciaChartProps> = ({
  registrosFiltrados,
  machineStandards
}) => {
  // Agrupar y calcular eficiencia por máquina
  const eficienciaPorMaquina = registrosFiltrados.reduce(
    (
      acc: { [machine: string]: { eficiencia: number; count: number } },
      reg
    ) => {
      reg.machines.forEach((machine) => {
        const horoIni =
          typeof machine.horometroInicial === 'string'
            ? parseFloat(machine.horometroInicial)
            : machine.horometroInicial;
        const horoFin =
          typeof machine.horometroFinal === 'string'
            ? parseFloat(machine.horometroFinal)
            : machine.horometroFinal;
        const horasAsignadas =
          typeof machine.horasAsignadas === 'string'
            ? parseFloat(machine.horasAsignadas)
            : machine.horasAsignadas;

        const totalHoras =
          !isNaN(horoIni) && !isNaN(horoFin) ? horoFin - horoIni : 0;
        const estandar = parseFloat(
          String(machineStandards[machine.machine] ?? '0')
        );
        const eficiencia = totalHoras - estandar * horasAsignadas;

        if (!acc[machine.machine]) {
          acc[machine.machine] = { eficiencia: 0, count: 0 };
        }
        acc[machine.machine].eficiencia += eficiencia;
        acc[machine.machine].count += 1;
      });
      return acc;
    },
    {} as { [machine: string]: { eficiencia: number; count: number } }
  );

  const dataChart = Object.entries(eficienciaPorMaquina).map(
    ([machine, { eficiencia, count }]) => ({
      machine,
      eficiencia: parseFloat((eficiencia / count).toFixed(2))
    })
  );

  return (
    <div className="my-6 w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataChart}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="machine" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="eficiencia" fill="#1e3a8a" name="Eficiencia Promedio" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EficienciaChart;
