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
  horasAsignadas: number;
  operatorCode: string;
  machines: Machine[];
  reference?: string;
  majorStops?: string;
  totalHours?: string;
  editadoPor?: string;
  camposModificados?: string;
  fechaUltimaEdicion?: string;
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
  const [editHorasAsignadas, setEditHorasAsignadas] = useState<string>('');
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
          // Asegurar que horasAsignadas sea un número válido
          const horas =
            typeof rest.horasAsignadas === 'number'
              ? rest.horasAsignadas
              : Number(rest.horasAsignadas);

          return {
            id: doc.id,
            ...rest,
            horasAsignadas: isNaN(horas) ? 0 : horas,
            originalMachines: rest.machines
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
    setEditData(registro.machines[machineIndex]);
    setEditHorasAsignadas(
      registro.horasAsignadas != null ? String(registro.horasAsignadas) : '0'
    );
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

    const camposModificados: string[] = [];
    (
      [
        'horometroInicial',
        'horometroFinal',
        'machine',
        'observaciones'
      ] as (keyof Machine)[]
    ).forEach((k) => {
      if ((editData[k] ?? originalMachine?.[k]) !== originalMachine?.[k]) {
        camposModificados.push(k);
      }
    });

    let horasAsignadasActualizada = registro.horasAsignadas;
    const horasNum = Number(editHorasAsignadas);
    if (!isNaN(horasNum) && horasNum !== registro.horasAsignadas) {
      camposModificados.push('horasAsignadas');
      horasAsignadasActualizada = horasNum;
    }

    const updateData: Partial<Registro> = {
      machines: newMachines,
      horasAsignadas: horasAsignadasActualizada,
      editadoPor: currentUser,
      camposModificados: camposModificados.join(', '),
      fechaUltimaEdicion: new Date().toISOString()
    };

    try {
      const docRef = doc(db, 'registro_horometros', registroId);
      await updateDoc(docRef, updateData);
      const newRegistros = [...registros];
      newRegistros[index] = {
        ...registro,
        ...updateData,
        machines: newMachines
      };
      setRegistros(newRegistros);
      setEditId(null);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleMouseEnter = (
    registro: Registro,
    e: React.MouseEvent<HTMLSpanElement>
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
            {/* Mostrar horas asignadas con valor por defecto */}
            <th className="px-3 py-2 border">Horas asignadas</th>
            <th className="px-3 py-2 border">Total horas</th>
            {editable && <th className="px-3 py-2 border">Acciones</th>}
            <th className="px-3 py-2 border">📝</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((entry) =>
            entry.machines?.map((machine, index) => {
              const horoFin = parseFloat(machine.horometroFinal);
              const horoIni = parseFloat(machine.horometroInicial);
              const totalHoras =
                isNaN(horoFin) || isNaN(horoIni) ? 0 : horoFin - horoIni;

              let rowColor = '';
              if (totalHoras < -5) rowColor = 'bg-red-400';
              else if (totalHoras < 5) rowColor = 'bg-yellow-400';
              else rowColor = 'bg-green-400';

              const isEditing = editId === entry.id + '-' + index;

              return (
                <tr
                  key={`${entry.id}-${index}`}
                  className={`hover:bg-gray-100 ${rowColor}`}
                >
                  <td className="px-3 py-2 border">{entry.fecha}</td>
                  <td className="px-3 py-2 border">{entry.operatorCode}</td>
                  <td className="px-3 py-2 border">{machine.machine}</td>
                  <td className="px-3 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        value={
                          editData.horometroInicial ?? machine.horometroInicial
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

                  <td className="px-3 py-2 border">
                    {isEditing ? (
                      <input
                        type="text"
                        value={
                          editData.horometroFinal ?? machine.horometroFinal
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
                  <td className="px-3 py-2 border">{entry.reference || ''}</td>
                  <td className="px-3 py-2 border">{entry.majorStops || ''}</td>

                  <td className="px-3 py-2 border">{machine.observaciones}</td>
                  {/* Mostrar horas asignadas con valor por defecto */}
                  <td className="px-3 py-2 border">
                    {entry.horasAsignadas != null
                      ? String(entry.horasAsignadas)
                      : '0'}
                  </td>
                  <td className="px-3 py-2 border">{totalHoras.toFixed(1)}</td>
                  {editable && (
                    <td className="px-3 py-2 border">
                      {isEditing ? (
                        <button
                          onClick={() => handleSave(entry.id, index)}
                          className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                        >
                          Guardar
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEdit(entry, index)}
                          className="bg-gray-500 text-white px-2 py-1 rounded cursor-pointer"
                        >
                          Editar
                        </button>
                      )}
                    </td>
                  )}
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
              );
            })
          )}
        </tbody>
      </table>

      {hoverInfo && hoverPosition && (
        <div
          className="absolute bg-white border p-2 shadow-lg text-xs rounded z-50"
          style={{
            top: hoverPosition.y,
            left: hoverPosition.x
          }}
        >
          <div>
            <strong>Editado por:</strong> {hoverInfo.editadoPor}
          </div>
          <div>
            <strong>Campos modificados:</strong> {hoverInfo.camposModificados}
          </div>
          <div>
            <strong>Fecha de edición:</strong>{' '}
            {new Date(hoverInfo.fechaUltimaEdicion ?? '').toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default EficencePicado;
