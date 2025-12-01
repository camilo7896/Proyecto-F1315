import React, { useState } from 'react';
import Papa from 'papaparse';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import app from '../../lib/credentialFirebase';

const db = getFirestore(app);
const storage = getStorage(app);

interface Referencia {
  nombre: string;
  codigo: string;
}

const ReferenciaForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'referencias'), { nombre, codigo });
      setMensaje('Referencia guardada correctamente');
      setNombre('');
      setCodigo('');
    } catch (error) {
      console.error('Error al guardar referencia:', error);
      setMensaje('Error al guardar');
    }
  };

  const handleCSVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // 👉 Subir archivo al Storage (SINTAXIS CORRECTA v9+)
      const storageRef = ref(storage, `csv-referencias/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      console.log('Archivo subido. URL:', url);

      // 👉 Procesar CSV
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async (results) => {
          const referencias: Referencia[] = results.data as Referencia[];

          for (const refData of referencias) {
            if (refData.nombre && refData.codigo) {
              try {
                await addDoc(collection(db, 'referencias'), refData);
              } catch (err) {
                console.error('Error al importar:', err);
              }
            }
          }

          setMensaje(
            `Importación completada. Archivo guardado en Firebase Storage`
          );
        }
      });
    } catch (err) {
      console.error('Error al subir CSV:', err);
      setMensaje('Error al subir archivo');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Crear Referencia</h2>

      {mensaje && <div className="text-green-600">{mensaje}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Nombre
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Código
          </label>
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Guardar
        </button>
      </form>

      <div className="mt-6">
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Importar CSV
        </label>
        <input
          type="file"
          accept=".csv"
          onChange={handleCSVUpload}
          className="w-full text-sm bg-amber-100 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export default ReferenciaForm;
