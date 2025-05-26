import { useState } from 'react';
import { dataFormCreateMachine } from './data/dataFormField';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../../lib/credentialFirebase';
import Alerts from '../../alerts/Alerts';

// Define AlertProps type if not imported from elsewhere
type AlertProps = {
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
} | null;

const db = getFirestore(app);

const CreateMachine = () => {
  const [form, setForm] = useState<{ [key: string]: string }>({});
  const [alert, setAlert] = useState<AlertProps>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value.toLocaleUpperCase()
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'machines'), form);
      setAlert({
        type: 'success',
        title: 'Maquina creada',
        message: 'Maquina creada correctamente.',
        onClose: () => setAlert(null)
      });
      setForm({});
    } catch (error) {
      console.error('Error al crear la máquina:', error);
      setAlert({
        type: 'error',
        title: 'Error al crear maquina',
        message:
          'Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.',
        onClose: () => setAlert(null)
      });
    }
  };

  return (
    <div className="roun min-h-screen flex items-center justify-center rounded-2xl backgroundForm">
      <form
        onSubmit={handleSubmit}
        className="bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md text-white space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Crear máquina</h2>

        {dataFormCreateMachine.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-medium mb-1"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              value={form[field.name] || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        <button
          type="submit"
          className="cursor-pointer w-full py-2 rounded bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white font-semibold"
        >
          Crear máquina
        </button>
        {alert && (
          <Alerts
            type={alert.type}
            title={alert.title}
            message={alert.message}
            onClose={alert.onClose}
          />
        )}
      </form>
    </div>
  );
};

export default CreateMachine;
