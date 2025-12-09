import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PicadoData from '../../components/nav/data/picadoData.tsx';
import '../../App.scss';

function PicadoLinkOption({
  item,
  index,
  isActive
}: {
  item: { title: string; slug: string };
  index: number;
  isActive: boolean;
}) {
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-amber-500 to-orange-500',
    'from-purple-500 to-pink-500',
    'from-rose-500 to-red-500',
    'from-indigo-500 to-violet-500'
  ];

  return (
    <Link to={`/picado/${item.slug}`}>
      <motion.button
        className={`group relative overflow-hidden rounded-xl p-6 border transition-all duration-300 w-full md:w-64 h-40 flex flex-col items-center justify-center ${
          isActive
            ? 'bg-gradient-to-br from-blue-600 to-cyan-600 border-blue-500 shadow-2xl shadow-blue-500/20'
            : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gray-600'
        }`}
        whileHover={!isActive ? { y: -5, scale: 1.02 } : {}}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {/* Efecto de brillo */}
        <div
          className={`absolute inset-0 bg-gradient-to-br opacity-0 ${
            isActive
              ? 'opacity-20 from-blue-500 to-cyan-500'
              : 'group-hover:opacity-10 from-blue-500 via-cyan-500 to-transparent'
          } transition-opacity duration-300`}
        ></div>

        {/* Icono */}
        <div
          className={`mb-4 p-3 rounded-xl shadow-lg ${
            isActive
              ? 'bg-white'
              : `bg-gradient-to-br ${colors[index % colors.length]}`
          }`}
        >
          <div
            className={`w-8 h-8 ${isActive ? 'text-blue-600' : 'text-white'}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15V3M12 15L8 11M12 15L16 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L2.621 19.485C2.72915 19.9177 2.97865 20.3018 3.33031 20.5763C3.68197 20.8508 4.116 21 4.563 21H19.438C19.885 21 20.319 20.8508 20.6707 20.5763C21.0223 20.3018 21.2718 19.9177 21.38 19.485L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 12V10C7 8.34315 8.34315 7 10 7H14C15.6569 7 17 8.34315 17 10V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h3
          className={`text-lg font-bold text-center mb-2 ${
            isActive ? 'text-white' : 'text-gray-100'
          }`}
        >
          {item.title}
        </h3>

        {/* Indicador */}
        <div
          className={`flex items-center text-sm transition-colors ${
            isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-400'
          }`}
        >
          <span>{isActive ? 'Activo' : 'Acceder'}</span>
          <svg
            className={`w-4 h-4 ml-2 transform ${
              isActive ? '' : 'group-hover:translate-x-1'
            } transition-transform`}
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
      </motion.button>
    </Link>
  );
}

const PicadoPage = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Detectar si hay un formulario abierto
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const currentSlug = pathParts[pathParts.length - 1];

    // Verificar si estamos en una ruta de formulario
    const isFormRoute = PicadoData.some(
      (item) => item.slug === currentSlug && currentSlug !== 'picado'
    );

    setIsFormOpen(isFormRoute);
    setSelectedItem(isFormRoute ? currentSlug : null);
  }, [location]);

  // Obtener el título del elemento seleccionado
  const selectedTitle =
    PicadoData.find((item) => item.slug === selectedItem)?.title || '';

  const handleBack = () => {
    // Navegar de vuelta a la lista
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      {/* Fondo industrial sutil */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,100,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(0,100,255,0.05)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isFormOpen ? (
            // VISTA DE FORMULARIO - OCUPA TODA LA PANTALLA
            <motion.div
              key="form-view"
              className="min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header del formulario */}
              <div className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-800">
                <div className="container mx-auto px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={handleBack}
                        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
                      >
                        <svg
                          className="w-6 h-6 text-gray-300 group-hover:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                      </button>
                      <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          {selectedTitle}
                        </h1>
                        <p className="text-sm text-gray-400">
                          Formulario de registro
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="hidden md:block px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="text-xs text-gray-400">
                          Modo edición
                        </div>
                        <div className="font-bold text-sm">Registro activo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido del formulario - OCUPA TODA LA PANTALLA */}
              <div className="container mx-auto px-4 py-6 md:px-6 min-h-[calc(100vh-80px)]">
                <motion.div
                  className="h-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Contenedor del formulario que ocupa toda la altura */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 h-full overflow-hidden flex flex-col">
                    {/* Barra superior del formulario */}
                    <div className="p-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-transparent"></div>

                    {/* Header del formulario */}
                    <div className="px-6 py-4 border-b border-gray-800">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-xl font-bold">{selectedTitle}</h2>
                          <p className="text-sm text-gray-400">
                            Complete los campos para registrar el horómetro
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-sm text-gray-300">
                            Conectado
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Área de contenido del formulario - Se expande */}
                    <div className="flex-1 p-6 overflow-auto">
                      <Outlet />
                    </div>

                    {/* Footer del formulario */}
                    <div className="px-6 py-4 border-t border-gray-800 bg-gray-900/50">
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                          Todos los campos marcados con * son obligatorios
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            // VISTA DE LISTA DE OPCIONES
            <motion.div
              key="list-view"
              className="min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
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
                      <Link
                        to="/"
                        className="flex items-center space-x-3 group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                          </svg>
                        </div>
                        <div>
                          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Registro de Picado
                          </h1>
                          <p className="text-xs text-gray-400">
                            GESTIÓN DE HORÓMETROS
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                      <div className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="text-xs text-gray-400">
                          Módulos Disponibles
                        </div>
                        <div className="font-bold">{PicadoData.length}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.header>

              {/* Main Content */}
              <main className="container mx-auto px-4 py-8 md:px-6">
                {/* Encabezado de la sección */}
                <motion.div
                  className="mb-8 md:mb-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Registro de Horómetros
                      </h1>
                      <p className="text-gray-400 text-lg max-w-3xl">
                        Seleccione el tipo de equipo o máquina para registrar y
                        gestionar sus horómetros.
                      </p>
                    </div>

                    <motion.div
                      className="mt-4 md:mt-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                        <div className="text-sm text-blue-400 font-medium">
                          Total Equipos
                        </div>
                        <div className="text-2xl font-bold">
                          {PicadoData.length}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Grid de opciones */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {PicadoData.map((item, index) => (
                      <PicadoLinkOption
                        key={index}
                        item={item}
                        index={index}
                        isActive={item.slug === selectedItem}
                      />
                    ))}
                  </div>

                  {/* Mensaje cuando no hay datos */}
                  {PicadoData.length === 0 && (
                    <motion.div
                      className="text-center py-16"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        No hay equipos registrados
                      </h3>
                      <p className="text-gray-400 max-w-md mx-auto">
                        Configure los tipos de equipos en la sección de
                        configuración.
                      </p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Instrucciones */}
                <motion.footer
                  className="mt-12 pt-8 border-t border-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 mb-2">
                        INSTRUCCIONES
                      </h4>
                      <ul className="text-gray-500 text-sm space-y-1">
                        <li>• Seleccione el tipo de equipo</li>
                        <li>• Ingrese el valor actual del horómetro</li>
                        <li>• Confirme el registro</li>
                        <li>• Verifique el historial</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 mb-2">
                        ESTADO
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-gray-300">
                          Sistema de registro activo
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 mb-2">
                        AYUDA
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Para asistencia técnica, contacte al soporte o consulte
                        la documentación.
                      </p>
                    </div>
                  </div>
                </motion.footer>
              </main>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PicadoPage;
