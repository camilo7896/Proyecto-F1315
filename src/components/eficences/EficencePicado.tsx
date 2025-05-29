import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc
} from 'firebase/firestore';
import '../../App.scss';
import app from '../../lib/credentialFirebase';
import { useEffect, useState } from 'react';
import React from 'react';

const db = getFirestore(app);

type Machine = {
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
  observaciones: string;
};

type Registro = {
  id: string;
  fecha: string;
  horasAsignadas: string;
  operatorCode: string;
  machines: Machine[];
  reference?: string;
  majorStops?: string;
  totalHours?: string;
  // Información adicional
  editadoPor?: string;
  camposModificados?: string;
  fechaUltimaEdicion?: string;
  // Copia de los datos originales (solo para mostrar cambios)
  originalMachines?: Machine[];
};

interface EficencePicadoProps {
  editable?: boolean;
}

const EficencePicado: React.FC<EficencePicadoProps> = ({
  editable = false
}) => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Machine>>({});
  const [hoverInfo, setHoverInfo] = useState<Registro | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const currentUser = 'Juan Pérez';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'registro_horometros')
        );
        const data = querySnapshot.docs.map((doc) => {
          const rest = doc.data() as Omit<Registro, 'id'>;
          return {
            id: doc.id,
            ...rest,
            originalMachines: rest.machines // copia original para mostrar cambios
          };
        });
        setRegistros(data);
      } catch (error) {
        console.error('Error fetching collection:', error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (registro: Registro, machineIndex: number) => {
    setEditId(registro.id + '-' + machineIndex);
    setEditData({ ...registro.machines[machineIndex] });
  };

  const handleChange = (field: string, value: string) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (registroId: string, machineIndex: number) => {
    const index = registros.findIndex((r) => r.id === registroId);
    if (index === -1) return;
    const registro = registros[index];
    const newMachines = [...registro.machines];
    const originalMachine = registro.originalMachines?.[machineIndex];

    newMachines[machineIndex] = {
      horometroFinal:
        editData.horometroFinal ?? originalMachine?.horometroFinal ?? '',
      horometroInicial:
        editData.horometroInicial ?? originalMachine?.horometroInicial ?? '',
      machine: editData.machine ?? originalMachine?.machine ?? '',
      observaciones:
        editData.observaciones ?? originalMachine?.observaciones ?? ''
    };

    // Detectar cambios
    const camposModificados = Object.keys(editData).filter(
      (k) =>
        (editData as Partial<Machine>)[k as keyof Machine] !==
        (originalMachine as Machine)[k as keyof Machine]
    );

    // Guardar en Firestore
    const updateData: Partial<Registro> = {
      machines: newMachines,
      editadoPor: currentUser,
      camposModificados: camposModificados.join(', '),
      fechaUltimaEdicion: new Date().toISOString()
    };

    const docRef = doc(db, 'registro_horometros', registroId);
    try {
      await updateDoc(docRef, updateData);
      const newRegistros = [...registros];
      newRegistros[index] = {
        ...registro,
        machines: newMachines,
        ...updateData
      };
      setRegistros(newRegistros);
      setEditId(null);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleMouseEnter = (
    registro: Registro,
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({ x: rect.right + 10, y: rect.top });
    setHoverInfo(registro);
  };

  const handleMouseLeave = () => {
    setHoverInfo(null);
    setHoverPosition(null);
  };

  return (
    <div className="p-6 w-full bg-white rounded-lg shadow-lg overflow-x-auto relative">
      <h2 className="text-xl font-bold mb-4">Eficencias</h2>
      <table className="min-w-full border border-gray-300 text-sm text-left">
        <thead className="backgroundForm text-white">
          <tr>
            <th className="px-3 py-2 border">Fecha</th>
            <th className="px-3 py-2 border">Operario</th>
            <th className="px-3 py-2 border">Maquina</th>
            <th className="px-3 py-2 border">Horometro inicial</th>
            <th className="px-3 py-2 border">Horometro final</th>
            <th className="px-3 py-2 border">Referencia</th>
            <th className="px-3 py-2 border">Paradas mayores</th>
            <th className="px-3 py-2 border">Observaciones</th>
            <th className="px-3 py-2 border">Horas asignadas</th>
            <th className="px-3 py-2 border">Total horas</th>
            {editable && <th className="px-3 py-2 border">Acciones</th>}
            <th className="px-3 py-2 border">📝</th> {/* icono para tooltip */}
          </tr>
        </thead>
        <tbody>
          {registros.map((entry) =>
            entry.machines?.map((machine, index) => {
              const horoFin = parseFloat(machine.horometroFinal);
              const horoIni = parseFloat(machine.horometroInicial);
              const totalHoras =
                isNaN(horoFin) || isNaN(horoIni) ? 0 : horoFin - horoIni;

              // Determinar color
              let rowColor = '';
              if (totalHoras < -5) {
                rowColor = 'bg-red-400';
              } else if (totalHoras < 5) {
                rowColor = 'bg-yellow-400';
              } else {
                rowColor = 'bg-green-400';
              }

              const isEditing = editId === entry.id + '-' + index;

              return (
                <React.Fragment key={`${entry.id}-${index}`}>
                  <tr className={`hover:bg-gray-100 ${rowColor}`}>
                    {/* Fecha */}
                    <td className="px-3 py-2 border">{entry.fecha}</td>
                    {/* Operario */}
                    <td className="px-3 py-2 border">{entry.operatorCode}</td>
                    {/* Maquina */}
                    <td className="px-3 py-2 border">{machine.machine}</td>
                    {/* Horometro inicial */}
                    <td className="px-3 py-2 border">
                      {isEditing ? (
                        <input
                          type="text"
                          value={
                            editData.horometroInicial ||
                            machine.horometroInicial
                          }
                          onChange={(e) =>
                            handleChange('horometroInicial', e.target.value)
                          }
                          className="w-full border p-1"
                        />
                      ) : (
                        machine.horometroInicial
                      )}
                    </td>
                    {/* Horometro final */}
                    <td className="px-3 py-2 border">
                      {isEditing ? (
                        <input
                          type="text"
                          value={
                            editData.horometroFinal || machine.horometroFinal
                          }
                          onChange={(e) =>
                            handleChange('horometroFinal', e.target.value)
                          }
                          className="w-full border p-1"
                        />
                      ) : (
                        machine.horometroFinal
                      )}
                    </td>
                    {/* Referencia */}
                    <td className="px-3 py-2 border">
                      {entry.reference || ''}
                    </td>
                    {/* Paradas mayores */}
                    <td className="px-3 py-2 border">
                      {entry.majorStops || ''}
                    </td>
                    {/* Observaciones */}
                    <td className="px-3 py-2 border">
                      {machine.observaciones}
                    </td>
                    {/* Horas asignadas */}
                    <td className="px-3 py-2 border">{entry.horasAsignadas}</td>
                    {/* Total horas */}
                    <td className="px-3 py-2 border">
                      {totalHoras.toFixed(1)}
                    </td>
                    {/* Acciones */}
                    {editable && (
                      <td className="px-3 py-2 border">
                        {isEditing ? (
                          <button
                            onClick={() => handleSave(entry.id, index)}
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                          >
                            Guardar
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEdit(entry, index)}
                            className="bg-gray-500 text-white px-2 py-1 rounded"
                          >
                            Editar
                          </button>
                        )}
                      </td>
                    )}
                    {/* Icono para tooltip */}
                    <td className="px-3 py-2 border relative">
                      {entry.editadoPor && (
                        <span
                          className="cursor-pointer"
                          onMouseEnter={(e) => handleMouseEnter(entry, e)}
                          onMouseLeave={handleMouseLeave}
                        >
                          👤
                        </span>
                      )}
                    </td>
                  </tr>
                  {/* Tooltip */}
                  {hoverInfo === entry && hoverPosition && (
                    <tr>
                      <td
                        colSpan={
                          12 /* ajusta a la cantidad total de columnas */
                        }
                      >
                        <div
                          className="fixed bg-white border border-gray-300 rounded shadow-lg p-3 max-w-sm z-50"
                          style={{
                            top: hoverPosition.y,
                            left: hoverPosition.x,
                            transform: 'translateY(-50%)'
                          }}
                        >
                          <div className="text-sm font-semibold mb-2">
                            Información de edición
                          </div>
                          <div className="text-sm mb-1">
                            <strong>Por:</strong> {entry.editadoPor}
                          </div>
                          <div className="text-sm mb-1">
                            <strong>Fecha:</strong> {entry.fechaUltimaEdicion}
                          </div>
                          <div className="text-sm mb-2 font-semibold">
                            Cambios en máquinas:
                          </div>
                          {/* Mostrar cambios en las máquinas */}
                          {entry.machines.map((machine, index) => {
                            const originalMachine =
                              entry.originalMachines?.[index];
                            return (
                              <div key={index} className="mb-2 border-t pt-2">
                                <div className="font-semibold mb-1">
                                  Máquina: {machine.machine}
                                </div>
                                {/* Horómetro Inicial */}
                                <div className="flex justify-between mb-1 text-gray-700">
                                  <div>Horómetro Inicial:</div>
                                  <div>
                                    {originalMachine?.horometroInicial} →{' '}
                                    {machine.horometroInicial}
                                  </div>
                                </div>
                                {/* Horómetro Final */}
                                <div className="flex justify-between mb-1 text-gray-700">
                                  <div>Horómetro Final:</div>
                                  <div>
                                    {originalMachine?.horometroFinal} →{' '}
                                    {machine.horometroFinal}
                                  </div>
                                </div>
                                {/* Observaciones */}
                                <div className="text-gray-700 mb-1">
                                  Observaciones:{' '}
                                  {originalMachine?.observaciones} →{' '}
                                  {machine.observaciones}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EficencePicado;
