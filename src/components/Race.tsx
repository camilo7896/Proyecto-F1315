import React from 'react';

// Definimos tipos para los datos que necesitamos
type Machine = {
  horasAsignadas: string | number;
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
};

type Registro = {
  operatorCode: string;
  operatorName: string;
  machines: Machine[];
};

type CarreraOperariosProps = {
  registrosFiltrados: Registro[];
  machineStandards: Record<string, string>;
};

const RaceOperator: React.FC<CarreraOperariosProps> = ({
  registrosFiltrados,
  machineStandards
}) => {
  // Definimos la interfaz para los datos del operario
  interface OperarioInfo {
    name: string;
    code: string;
    totalEficiencia: number;
    count: number;
  }

  // Agrupar por operario y calcular su eficiencia promedio
  const operariosData = registrosFiltrados.reduce(
    (acc: Record<string, OperarioInfo>, reg) => {
      reg.machines.forEach((machine) => {
        const horoFin = parseFloat(machine.horometroFinal) || 0;
        const horoIni = parseFloat(machine.horometroInicial) || 0;
        const totalHoras = horoFin - horoIni;
        const standard = parseFloat(machineStandards[machine.machine] || '0');
        const horasAsignadas =
          typeof machine.horasAsignadas === 'string'
            ? parseFloat(machine.horasAsignadas)
            : machine.horasAsignadas || 0;

        const eficiencia =
          standard > 0 ? totalHoras - standard * horasAsignadas : 0;

        if (!acc[reg.operatorCode]) {
          acc[reg.operatorCode] = {
            name: reg.operatorName || reg.operatorCode,
            code: reg.operatorCode,
            totalEficiencia: 0,
            count: 0
          };
        }

        acc[reg.operatorCode].totalEficiencia += eficiencia;
        acc[reg.operatorCode].count += 1;
      });
      return acc;
    },
    {} as Record<string, OperarioInfo>
  );

  // Ordenar por eficiencia (de mayor a menor)
  const operariosOrdenados = Object.values(operariosData)
    .map((op) => ({
      ...op,
      eficienciaPromedio: op.count > 0 ? op.totalEficiencia / op.count : 0
    }))
    .sort((a, b) => b.eficienciaPromedio - a.eficienciaPromedio);

  if (operariosOrdenados.length === 0) return null;

  // Encontrar los valores máximos y mínimos para escalar
  const eficienciasPositivas = operariosOrdenados
    .filter((op) => op.eficienciaPromedio > 0)
    .map((op) => op.eficienciaPromedio);

  const eficienciasNegativas = operariosOrdenados
    .filter((op) => op.eficienciaPromedio < 0)
    .map((op) => op.eficienciaPromedio);

  const maxPositiva = Math.max(...eficienciasPositivas, 0.1); // Mínimo 0.1 para evitar división por cero
  const maxNegativa = Math.min(...eficienciasNegativas, -0.1); // Máximo -0.1 para evitar división por cero

  // Colores predefinidos de Tailwind para evitar problemas con clases dinámicas
  const coloresPositivos = [
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
    'bg-green-600',
    'bg-green-700'
  ];
  const coloresNegativos = [
    'bg-red-300',
    'bg-red-400',
    'bg-red-500',
    'bg-red-600',
    'bg-red-700'
  ];

  return (
    <div className="my-6">
      <h3 className="text-lg font-semibold mb-2 text-center">
        posiciones de los operarios
      </h3>
      <div className="flex items-center justify-center space-x-4 overflow-x-auto py-4">
        {operariosOrdenados.map((op, index) => {
          // Calcular color basado en eficiencia
          let colorClass = 'bg-gray-400'; // Neutral

          if (op.eficienciaPromedio > 0) {
            const nivel = Math.min(
              Math.floor(
                (op.eficienciaPromedio / maxPositiva) *
                  (coloresPositivos.length - 1)
              ),
              coloresPositivos.length - 1
            );
            colorClass = coloresPositivos[nivel];
          } else if (op.eficienciaPromedio < 0) {
            const nivel = Math.min(
              Math.floor(
                (op.eficienciaPromedio / maxNegativa) *
                  (coloresNegativos.length - 1)
              ),
              coloresNegativos.length - 1
            );
            colorClass = coloresNegativos[nivel];
          }

          return (
            <div key={op.code} className="flex flex-col items-center mx-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold 
                  shadow-md border-2 ${index === 0 ? 'border-yellow-400' : 'border-transparent'} ${colorClass}`}
                style={{
                  transform: index === 0 ? 'scale(1.1)' : 'scale(1)'
                }}
                title={`${op.name} - Eficiencia: ${op.eficienciaPromedio.toFixed(2)}`}
              >
                {op.code}
              </div>

              <span className="text-xs text-gray-500">#{index + 1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RaceOperator;
