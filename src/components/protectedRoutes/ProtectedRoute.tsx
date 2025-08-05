import { useNavigate } from 'react-router-dom';
import { useUserRole } from '../../hooks/useUserRole';

type Props = {
  allowedRoles: string[];
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ allowedRoles, children }) => {
  const { role, loading } = useUserRole();
  const navigate = useNavigate();

  if (loading) return <div>Cargando...</div>;

  // Si no tiene rol, solo puede ir al home
  if (!role) {
    return (
      <div className="max-w-lg mx-auto mt-10 text-center text-red-600">
        No tienes permiso para acceder a esta opción.
        <br />
        Solicita autorización al administrador.
        <hr />
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  // Si el rol no está permitido, muestra mensaje
  if (!allowedRoles.includes(role)) {
    return (
      <div className="max-w-lg mx-auto mt-10 text-center text-red-600">
        No tienes permiso para acceder a esta opción.
        <br />
        Solicita autorización al administrador.
        <hr />
        <p className="mt-4">
          Tu rol actual es: <strong>{role}</strong>
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
