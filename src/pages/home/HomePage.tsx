// import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div className="transition-transform duration-300 ease-in-out">
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-start">
          <h1 className="text-4xl font-bold mb-4">¡Bienvenido!</h1>
          <p className="text-lg mb-8 text-center max-w-2xl">
            Aquí puedes gestionar y visualizar los registros de horómetros y
            eficiencias de tus máquinas. Usa los enlaces abajo para navegar
            rápidamente por las funciones principales.
          </p>

          {/* Enlaces rápidos
          <div className="flex flex-wrap">
            <Link to="/picado" className="button">
              Registrar Nuevo
            </Link>
            <Link to="/data" className="button">
              Ver Reportes
            </Link>
            <Link to="/configurations" className="button">
              Configuración
            </Link>
          </div> */}

          {/* Frase motivacional */}
          <div className="mt-6 text-center italic text-gray-700 max-w-2xl">
            "El éxito es la suma de pequeños esfuerzos repetidos día tras día."
          </div>
        </div>
      </div>
    </>
  );
}
