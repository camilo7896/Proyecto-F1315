// contexts/RegistrosContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode
} from 'react';

// Definición de tipos
interface Machine {
  horasAsignadas: string | number;
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
  reference: string;
  paradasMayores: string;
  observaciones: string;
  fechaHora?: string;
}

interface Registro {
  id: string;
  fecha: string;
  operatorCode: string;
  operatorName: string;
  machines: Machine[];
  totalHours?: string;
  editadoPor?: string;
  camposModificados?: string;
  fechaUltimaEdicion?: string;
  originalMachines?: Machine[];
  detallesEdicion?: {
    usuario: string;
    fechaHora: string;
    valorAnterior: Partial<Machine>;
    valorNuevo: Partial<Machine>;
  }[];
}

interface RegistrosContextType {
  registros: Registro[];
  setRegistros: (registros: Registro[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Crear el contexto con valores por defecto
const RegistrosContext = createContext<RegistrosContextType>({
  registros: [],
  setRegistros: () => {},
  loading: true,
  setLoading: () => {}
});

// Hook personalizado para usar el contexto
export const useRegistros = () => {
  const context = useContext(RegistrosContext);
  if (!context) {
    throw new Error(
      'useRegistros debe ser usado dentro de un RegistrosProvider'
    );
  }
  return context;
};

// Props para el Provider
interface RegistrosProviderProps {
  children: ReactNode;
}

// Componente Provider
export const RegistrosProvider: React.FC<RegistrosProviderProps> = ({
  children
}) => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <RegistrosContext.Provider
      value={{
        registros,
        setRegistros,
        loading,
        setLoading
      }}
    >
      {children}
    </RegistrosContext.Provider>
  );
};

export default RegistrosContext;
