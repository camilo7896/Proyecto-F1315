import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Agregar estas importaciones

// Componente para el turno actual
const TurnoActual = () => {
  const [turno, setTurno] = useState({ nombre: '', horario: '', periodo: '' });

  useEffect(() => {
    const calcularTurno = () => {
      const ahora = new Date();
      const horas = ahora.getHours();
      const minutos = ahora.getMinutes();

      // Convertir a minutos totales del día para facilitar comparación
      const minutosActual = horas * 60 + minutos;

      // Definir los turnos en minutos
      const inicioManana = 6 * 60; // 06:00 = 360 minutos
      const inicioTarde = 14 * 60 + 1; // 14:01 = 841 minutos
      const inicioNoche = 22 * 60 + 1; // 22:01 = 1321 minutos

      let nombre, horario, periodo;

      if (minutosActual >= inicioManana && minutosActual < inicioTarde) {
        // Turno Matutino: 06:00 - 14:00
        nombre = 'Matutino';
        horario = '06:00 - 14:00';
        periodo = 'mañana';
      } else if (minutosActual >= inicioTarde && minutosActual < inicioNoche) {
        // Turno Vespertino: 14:01 - 22:00
        nombre = 'Vespertino';
        horario = '14:01 - 22:00';
        periodo = 'tarde';
      } else {
        // Turno Nocturno: 22:01 - 05:59
        nombre = 'Nocturno';
        horario = '22:01 - 06:00';
        periodo = 'noche';
      }

      setTurno({ nombre, horario, periodo });
    };

    // Calcular al montar
    calcularTurno();

    // Actualizar cada minuto
    const intervalo = setInterval(calcularTurno, 60000);

    return () => clearInterval(intervalo);
  }, []);

  // Iconos para cada turno
  const iconos = {
    mañana: '🌅',
    tarde: '🌤️',
    noche: '🌙'
  };

  return (
    <div className="px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700">
      <div className="text-sm text-gray-400 flex items-center gap-2">
        <span>{iconos[turno.periodo]}</span>
        <span>Turno Actual</span>
      </div>
      <div className="text-xl font-bold">
        {turno.nombre} • {turno.horario}
      </div>
      <div className="text-xs text-gray-500 mt-1">
        {turno.periodo === 'mañana' && 'Buenos días'}
        {turno.periodo === 'tarde' && 'Buenas tardes'}
        {turno.periodo === 'noche' && 'Buenas noches'}
      </div>
    </div>
  );
};

export default function HomePage() {
  const quickLinks = [
    {
      title: 'Registro de Horómetros',
      description: 'Registra y actualiza los horómetros de las máquinas',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 8V12L15 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      path: '/picado',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Reportes de Eficiencia',
      description: 'Visualiza reportes detallados y análisis de datos',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 3V21H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16L10 12L13 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      path: '/data',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Configuración del Sistema',
      description: 'Administra configuraciones y parámetros del sistema',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M19.4 15C19.2661 15.3044 19.1407 15.6098 19.0505 15.9033C18.8743 16.529 18.7561 17.0337 18.6703 17.4267L18.5824 17.8319C18.487 18.2733 18.171 18.5893 17.7296 18.6847L17.3244 18.7726C16.9314 18.8584 16.4267 18.9766 15.801 19.1528C15.5075 19.243 15.2021 19.3684 14.8977 19.5023C14.5664 19.6477 14.2814 19.7527 14.0396 19.8385C13.5852 19.998 13.213 20.1 12.889 20.183C12.5825 20.2613 12.2935 20.3333 12 20.3333C11.7065 20.3333 11.4175 20.2613 11.111 20.183C10.787 20.1 10.4148 19.998 9.9604 19.8385C9.7186 19.7527 9.4336 19.6477 9.1023 19.5023C8.7979 19.3684 8.4925 19.243 8.199 19.1528C7.5733 18.9766 7.0686 18.8584 6.6756 18.7726L6.2704 18.6847C5.829 18.5893 5.513 18.2733 5.4176 17.8319L5.3297 17.4267C5.2439 17.0337 5.1257 16.529 4.9495 15.9033C4.8593 15.6098 4.7339 15.3044 4.6 15C4.4661 14.6956 4.3407 14.3902 4.2505 14.0967C4.0743 13.471 3.9561 12.9663 3.8703 12.5733L3.7824 12.1681C3.687 11.7267 3.371 11.4107 2.9296 11.3153L2.5244 11.2274C2.1314 11.1416 1.6267 11.0234 1.001 10.8472C0.7075 10.757 0.4021 10.6316 0.0977 10.4977C-0.2336 10.3523 -0.5186 10.2473 -0.7604 10.1615C-1.2148 10.002 -1.587 9.9 -1.911 9.817C-2.2175 9.7387 -2.5065 9.6667 -2.8 9.6667C-3.0935 9.6667 -3.3825 9.7387 -3.689 9.817C-4.013 9.9 -4.3852 10.002 -4.8396 10.1615C-5.0814 10.2473 -5.3664 10.3523 -5.6977 10.4977C-6.0021 10.6316 -6.3075 10.757 -6.601 10.8472C-7.2267 11.0234 -7.7314 11.1416 -8.1244 11.2274L-8.5296 11.3153C-8.971 11.4107 -9.287 11.7267 -9.3824 12.1681L-9.4703 12.5733C-9.5561 12.9663 -9.6743 13.471 -9.8505 14.0967C-9.9407 14.3902 -10.0661 14.6956 -10.2 15C-10.3339 15.3044 -10.4593 15.6098 -10.5495 15.9033C-10.7257 16.529 -10.8439 17.0337 -10.9297 17.4267L-11.0176 17.8319C-11.113 18.2733 -11.429 18.5893 -11.8704 18.6847L-12.2756 18.7726C-12.6686 18.8584 -13.1733 18.9766 -13.799 19.1528C-14.0925 19.243 -14.3979 19.3684 -14.7023 19.5023C-15.0336 19.6477 -15.3186 19.7527 -15.5604 19.8385C-16.0148 19.998 -16.387 20.1 -16.711 20.183C-17.0175 20.2613 -17.3065 20.3333 -17.6 20.3333"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      path: '/configurations',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { label: 'Máquinas Activas', value: '24', change: '+2' },
    { label: 'Eficiencia Total', value: '87.5%', change: '+1.2%' },
    { label: 'Horas Operativas', value: '1,248', change: '+156' },
    { label: 'Alertas Activas', value: '3', change: '-1' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      {/* Fondo industrial sutil */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,100,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(0,100,255,0.05)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-xl font-bold">F</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    F1315 Industrial
                  </h1>
                  <p className="text-xs text-gray-400">PLATAFORMA DE GESTIÓN</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm text-gray-300">Sistema Activo</span>
                </div>
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          {/* Bienvenida */}
          <motion.div
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Bienvenido al Panel de Control
                </h1>
                <p className="text-gray-400 text-lg max-w-3xl">
                  Gestiona y visualiza los registros de horómetros y eficiencias
                  de tus máquinas. Monitorea el rendimiento y optimiza la
                  operación industrial.
                </p>
              </div>
              <div className="hidden md:block">
                {/* AQUÍ ESTÁ EL COMPONENTE DEL TURNO DINÁMICO */}
                <TurnoActual />
              </div>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                    <div className="text-3xl font-bold mt-2">{stat.value}</div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      stat.change.startsWith('+')
                        ? 'bg-green-900/30 text-green-400'
                        : 'bg-red-900/30 text-red-400'
                    }`}
                  >
                    {stat.change}
                  </div>
                </div>
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      index === 0
                        ? 'bg-blue-500'
                        : index === 1
                          ? 'bg-green-500'
                          : index === 2
                            ? 'bg-amber-500'
                            : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(100, 70 + index * 10)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-blue-500 rounded-full mr-3"></span>
              Accesos Rápidos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.path} className="group">
                  <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full hover:scale-[1.02]"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-6 h-6 text-white">{link.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{link.title}</h3>
                        <p className="text-gray-400 text-sm">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Acceder →
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Mensaje motivacional */}
          <motion.div
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4">
                La excelencia operativa es un compromiso diario
              </h3>
              <p className="text-gray-400 text-lg italic">
                "El éxito en la industria no es un destino, sino un viaje
                continuo de mejora, precisión y dedicación a cada detalle del
                proceso."
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  Sistema Optimizado
                </div>
                <div className="h-4 w-px bg-gray-700"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  Datos en Tiempo Real
                </div>
                <div className="h-4 w-px bg-gray-700"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                  Monitoreo Activo
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            className="mt-12 pt-8 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm">
                © 2024 F1315 Plataforma de Gestión Industrial. Todos los
                derechos reservados.
              </div>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-500 text-sm">v1.5.2</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
                  <span className="text-gray-400 text-sm">Operacional</span>
                </div>
              </div>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}
