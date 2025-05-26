import { useState } from 'react';
import { dataFormCreateUser } from './data/dataFormField';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import app from '../../../lib/credentialFirebase';
import Alerts from '../../alerts/Alerts';

const db = getFirestore(app);

type DataFormFieldProps = {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
};
type AlertProps = {
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
} | null;

const CreateUser: React.FC<DataFormFieldProps> = () => {
  const [user, setUser] = useState<{ [key: string]: string }>({});
  const [alert, setAlert] = useState<AlertProps>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value.toLocaleUpperCase()
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'operators'), user);
      setAlert({
        type: 'success',
        title: 'Usuario creado',
        message: 'El usuario se ha creado correctamente.',
        onClose: () => setAlert(null)
      });
      setUser({});
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      setAlert({
        type: 'error',
        title: 'Error al crear usuario',
        message:
          'Ha ocurrido un error al crear el usuario. Por favor, inténtalo de nuevo.',
        onClose: () => setAlert(null)
      });
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center rounded-2xl backgroundForm">
        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-lg shadow-md w-full max-w-md text-white space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center">Crear usurio</h2>

          {dataFormCreateUser.map((field) => (
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
                placeholder={field.placeholder}
                value={user[field.name] || ''}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-600 bg-gray-200 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={field.required}
              />
            </div>
          ))}

          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Crear usuario
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
    </>
  );
};

export default CreateUser;
