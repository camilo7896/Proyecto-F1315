import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../lib/credentialFirebase';

const db = getFirestore(app);

interface AssignMachineUser {
  id: string;
  operator: string;
  machines: string[];
  timestamp?: string;
}

interface RegistroCard {
  id: string;
  fecha: string;
  operatorCode: string;
  machines: string[];
}

interface DayResult {
  date: string;
  registered: {
    operator: string;
    machines: string[];
    horaRegistro: string;
  }[];
  notRegistered: {
    operator: string;
    machines: string[];
  }[];
}

const ControlRegistros: React.FC = () => {
  const [fechaInicio, setFechaInicio] = useState<string>('');
  const [fechaFin, setFechaFin] = useState<string>('');
  const [horaInicio, setHoraInicio] = useState<string>('00:00');
  const [horaFin, setHoraFin] = useState<string>('23:59');
  const [operarios, setOperarios] = useState<AssignMachineUser[]>([]);
  const [resultados, setResultados] = useState<DayResult[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [sabadosLaborables, setSabadosLaborables] = useState<boolean>(true);

  useEffect(() => {
    const fetchOperarios = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'assignments'));
        const data = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data()
            }) as AssignMachineUser
        );
        setOperarios(data);
      } catch (error) {
        console.error('Error cargando operarios:', error);
      }
    };

    fetchOperarios();
  }, []);

  const handleBuscar = async () => {
    if (!fechaInicio || !fechaFin) {
      alert('Por favor seleccione un rango de fechas');
      return;
    }

    setCargando(true);

    try {
      // Convertir fechas a objetos Date en hora de Colombia (UTC-5)
      const inicio = new Date(`${fechaInicio}T${horaInicio}:00-05:00`);
      const fin = new Date(`${fechaFin}T${horaFin}:00-05:00`);

      // Cargar todos los registros
      const querySnapshot = await getDocs(
        collection(db, 'registro_horometros')
      );
      const allRegistros = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data()
          }) as RegistroCard
      );

      // Filtrar registros dentro del rango en hora de Colombia
      const registrosData = allRegistros.filter((reg) => {
        try {
          const regDate = new Date(reg.fecha + '-05:00');
          return regDate >= inicio && regDate <= fin;
        } catch (e) {
          console.error('Error procesando fecha del registro:', reg.fecha, e);
          return false;
        }
      });

      // Inicializar array para resultados
      const diasResultados: DayResult[] = [];

      // Iterar sobre cada día en el rango
      const currentDate = new Date(inicio);
      while (currentDate <= fin) {
        const diaSemana = currentDate.getDay();

        // Saltar domingos y sábados no laborables según configuración
        if (diaSemana !== 0 && (diaSemana !== 6 || sabadosLaborables)) {
          const fechaStr = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD

          // Encontrar registros de este día
          const registrosDelDia = registrosData.filter((reg) => {
            try {
              const regDate = new Date(reg.fecha + '-05:00');
              const regFechaStr = regDate.toISOString().split('T')[0];
              return regFechaStr === fechaStr;
            } catch {
              return false;
            }
          });

          // Obtener operarios que registraron este día
          const operariosQueRegistraron = registrosDelDia.map((reg) =>
            reg.operatorCode.toUpperCase()
          );

          // Crear arrays para operarios registrados y no registrados
          const registered: {
            operator: string;
            machines: string[];
            horaRegistro: string;
          }[] = [];
          const notRegistered: { operator: string; machines: string[] }[] = [];

          // Verificar cada operario
          operarios.forEach((op) => {
            const opCode = op.operator.toUpperCase();
            const opMachines = op.machines || [];

            if (operariosQueRegistraron.includes(opCode)) {
              // Encontrar la hora del registro para este operario
              const registroOperario = registrosDelDia.find(
                (reg) => reg.operatorCode.toUpperCase() === opCode
              );

              let horaRegistro = 'Hora no disponible';
              if (registroOperario && registroOperario.fecha) {
                try {
                  const fechaRegistro = new Date(
                    registroOperario.fecha + '-05:00'
                  );
                  horaRegistro = fechaRegistro.toLocaleTimeString('es-CO', {
                    hour: '2-digit',
                    minute: '2-digit'
                  });
                } catch (e) {
                  console.error('Error procesando hora del registro:', e);
                }
              }

              registered.push({
                operator: opCode,
                machines: opMachines,
                horaRegistro
              });
            } else {
              notRegistered.push({ operator: opCode, machines: opMachines });
            }
          });

          // Solo agregar día si hay registros o faltantes
          if (registered.length > 0 || notRegistered.length > 0) {
            diasResultados.push({
              date: fechaStr,
              registered,
              notRegistered
            });
          }
        }

        // Avanzar al siguiente día
        currentDate.setDate(currentDate.getDate() + 1);
      }

      setResultados(diasResultados);
    } catch (error) {
      console.error('Error buscando registros:', error);
      alert('Error al buscar registros');
    } finally {
      setCargando(false);
    }
  };

  const formatearFecha = (fechaStr: string) => {
    const fecha = new Date(fechaStr + 'T00:00:00');
    return fecha.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Función para capitalizar la primera letra
  const capitalizarPrimeraLetra = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Control de Registros Diarios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha inicio
          </label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha fin
          </label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hora inicio
          </label>
          <input
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hora fin
          </label>
          <input
            type="time"
            value={horaFin}
            onChange={(e) => setHoraFin(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={sabadosLaborables}
            onChange={(e) => setSabadosLaborables(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
          />
          <span className="text-sm text-gray-700">
            Incluir sábados como días laborables
          </span>
        </label>
      </div>

      <button
        onClick={handleBuscar}
        disabled={cargando}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          cargando ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-8`}
      >
        {cargando ? 'Buscando...' : 'Buscar registros'}
      </button>

      {resultados.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
            Resumen de Registros
          </h3>
          <div className="space-y-6">
            {resultados.map((dia) => (
              <div
                key={dia.date}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <h4 className="font-medium text-lg text-gray-800 mb-4 bg-gray-100 p-2 rounded-md">
                  {capitalizarPrimeraLetra(formatearFecha(dia.date))}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Operarios que registraron */}
                  <div className="bg-green-50 p-3 rounded-md">
                    <h5 className="font-medium text-green-800 mb-2 flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Registraron ({dia.registered.length})
                    </h5>
                    {dia.registered.length > 0 ? (
                      <ul className="space-y-2">
                        {dia.registered.map((op) => (
                          <li key={op.operator} className="text-green-700">
                            <div className="font-medium">
                              {op.operator}
                              <span className="text-xs ml-2 bg-green-200 text-green-800 px-2 py-1 rounded-full">
                                {op.horaRegistro}
                              </span>
                            </div>
                            {op.machines && op.machines.length > 0 && (
                              <div className="text-xs text-green-600 ml-2">
                                Máquinas: {op.machines.join(', ')}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-green-600 text-sm">
                        Todos los operarios registraron
                      </p>
                    )}
                  </div>

                  {/* Operarios que NO registraron */}
                  <div className="bg-red-50 p-3 rounded-md">
                    <h5 className="font-medium text-red-800 mb-2 flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      No registraron ({dia.notRegistered.length})
                    </h5>
                    {dia.notRegistered.length > 0 ? (
                      <ul className="space-y-2">
                        {dia.notRegistered.map((op) => (
                          <li key={op.operator} className="text-red-700">
                            <div className="font-medium">{op.operator}</div>
                            {op.machines && op.machines.length > 0 && (
                              <div className="text-xs text-red-600 ml-2">
                                Máquinas: {op.machines.join(', ')}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-red-600 text-sm">
                        Todos los operarios registraron
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {resultados.length === 0 && !cargando && fechaInicio && fechaFin && (
        <div className="mt-8 text-center text-gray-500 p-4 bg-gray-50 rounded-md">
          No se encontraron registros en el rango de fechas seleccionado.
        </div>
      )}
    </div>
  );
};

export default ControlRegistros;
