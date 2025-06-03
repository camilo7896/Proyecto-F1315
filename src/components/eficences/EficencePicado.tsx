import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import app from '../../lib/credentialFirebase';
import { useEffect, useState } from 'react';

const db = getFirestore(app);

type Machine = {
  horasAsignadas: string | number; // ahora se trata como decimal
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
  observaciones: string;
};

type Registro = {
  id: string;
  fecha: string;
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

const EficencePicado: React.FC<{ editable?: boolean }> = ({
  editable = false
}) => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Machine>>({});
  const [editHoras, setEditHoras] = useState<string>(''); // valor decimal como string
  const [hoverInfo, setHoverInfo] = useState<Registro | null>(null);
  const [machineStandards, setMachineStandards] = useState<
    Record<string, string>
  >({});
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Estado para filtro por mes
  const [mesFiltro, setMesFiltro] = useState<string>(() => {
    const ahora = new Date();
    return ahora.toISOString().slice(0, 7); // "YYYY-MM"
  });

  const fetchMachineStandards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'machines'));
      const standards: Record<string, string> = {};
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Asumimos que los campos son: machineName, efficiency
        if (data.abbreviation && data.efficiency) {
          standards[data.abbreviation] = data.efficiency;
        }
      });
      setMachineStandards(standards);
    } catch (error) {
      console.error('Error fetching machine standards:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'registro_horometros')
        );
        const data = querySnapshot.docs.map((doc) => {
          const rest = doc.data() as Omit<Registro, 'id'>;
          return { id: doc.id, ...rest };
        });
        setRegistros(data);
      } catch (error) {
        console.error('Error fetching collection:', error);
      }
    };
    fetchData();
    fetchMachineStandards();
  }, []);

  // Filtrar registros por mes seleccionado
  const registrosFiltrados = registros.filter((reg) => {
    const fechaMes = reg.fecha.slice(0, 7); // "YYYY-MM"
    return fechaMes === mesFiltro;
  });

  const handleEdit = (registro: Registro, machineIndex: number) => {
    setEditId(registro.id + '-' + machineIndex);
    const machine = registro.machines[machineIndex];
    setEditData(machine);
    setEditHoras(String(machine.horasAsignadas));
  };

  const handleHorasChange = (value: string) => {
    setEditHoras(value);
  };

  const handleSave = async (registroId: string, machineIndex: number) => {
    const auth = getAuth(app);
    const user = auth.currentUser;
    const currentUser = user && user.email ? user.email : 'usuario_desconocido';

    const index = registros.findIndex((r) => r.id === registroId);
    if (index === -1) return;
    const registro = registros[index];
    const newMachines = [...registro.machines];
    const originalMachine = registro.originalMachines?.[machineIndex];

    const horasDecimal = parseFloat(editHoras);
    if (isNaN(horasDecimal)) {
      alert('Por favor ingresa un número válido para horas.');
      return;
    }

    newMachines[machineIndex] = {
      horasAsignadas: horasDecimal,
      horometroFinal:
        editData.horometroFinal ?? originalMachine?.horometroFinal ?? '',
      horometroInicial:
        editData.horometroInicial ?? originalMachine?.horometroInicial ?? '',
      machine: editData.machine ?? originalMachine?.machine ?? '',
      observaciones:
        editData.observaciones ?? originalMachine?.observaciones ?? ''
    };

    // Campos modificados
    const camposModificados: string[] = [];
    (
      [
        'horometroInicial',
        'horometroFinal',
        'machine',
        'observaciones',
        'horasAsignadas'
      ] as (keyof Machine)[]
    ).forEach((k) => {
      const originalVal = originalMachine?.[k];
      const newVal = newMachines[machineIndex][k];
      if (k === 'horasAsignadas') {
        if (parseFloat(String(originalVal)) !== horasDecimal) {
          camposModificados.push(k);
        }
      } else {
        if (newVal !== originalVal) {
          camposModificados.push(k);
        }
      }
    });

    const updateData: Partial<Registro> = {
      machines: newMachines,
      editadoPor: currentUser ?? undefined,
      camposModificados: camposModificados.join(', '),
      fechaUltimaEdicion: new Date().toISOString()
    };

    try {
      const docRef = doc(db, 'registro_horometros', registroId);
      await updateDoc(docRef, updateData);
      // Actualizar localmente
      const newRegistros = [...registros];
      newRegistros[index] = {
        ...registro,
        ...updateData,
        machines: newMachines
      };
      setRegistros(newRegistros);
      setEditId(null);
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  };

  const handleMouseClick = (
    registro: Registro,
    e: React.MouseEvent<HTMLSpanElement>
  ) => {
    console.log('click en', registro);
    const rect = e.currentTarget.getBoundingClientRect();
    console.log('rect', rect);
    setHoverPosition({ x: rect.right + -350, y: rect.top });
    setHoverInfo(registro);
  };

  const handleMouseLeave = () => {
    console.log('hover end');
    setHoverInfo(null);
    setHoverPosition(null);
  };

  // Mostrar en pantalla el valor decimal
  const mostrarHoras = (valor: string | number) => {
    return typeof valor === 'number' ? valor.toFixed(2) : String(valor);
  };

  return (
    <div className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-lg overflow-x-auto relative">
      {/* Selector de mes */}
      <div className="flex items-center mb-4">
        <span className="mr-4 font-semibold">Filtrar por mes:</span>
        <input
          type="month"
          value={mesFiltro}
          onChange={(e) => setMesFiltro(e.target.value)}
          className="border p-1 rounded"
        />
      </div>

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
            {/* Mostrar horas en decimal */}
            <th className="px-3 py-2 border">Horas Asignadas</th>
            {/* Mostrar total horas */}
            <th className="px-3 py-2 border">Total horas</th>
            {/* Eficence */}
            <th className="px-3 py-2 border">Stand</th>
            <th className="px-3 py-2 border">Eficiencia</th>

            {editable && <th className="px-3 py-2 border">Acciones</th>}
            <th className="px-3 py-2 border">📝</th>
          </tr>
        </thead>
        <tbody>
          {registrosFiltrados.map((entry) =>
            entry.machines?.map((machine, index) => {
              const horoFin = parseFloat(machine.horometroFinal);
              const horoIni = parseFloat(machine.horometroInicial);
              const totalHoras =
                isNaN(horoFin) || isNaN(horoIni) ? 0 : horoFin - horoIni;

              const isEditing = editId === entry.id + '-' + index;

              return (
                <tr key={`${entry.id}-${index}`} className="hover:bg-gray-100">
                  <td className="px-3 py-2 border">{entry.fecha}</td>
                  <td className="px-3 py-2 border">{entry.operatorCode}</td>
                  <td className="px-3 py-2 border">{machine.machine}</td>
                  <td className="px-3 py-2 border">
                    {machine.horometroInicial}
                  </td>
                  <td className="px-3 py-2 border">{machine.horometroFinal}</td>
                  <td className="px-3 py-2 border">{entry.reference || ''}</td>
                  <td className="px-3 py-2 border">{entry.majorStops || ''}</td>
                  <td className="px-3 py-2 border">{machine.observaciones}</td>
                  {/* Mostrar en decimal */}
                  <td className="px-3 py-2 border">
                    {isEditing ? (
                      <input
                        type="number"
                        step="0.01"
                        value={editHoras}
                        onChange={(e) => handleHorasChange(e.target.value)}
                        className="w-full border p-1"
                        min="0"
                      />
                    ) : (
                      mostrarHoras(machine.horasAsignadas)
                    )}
                  </td>
                  {/* Total horas */}
                  <td className="px-3 py-2 border">{totalHoras.toFixed(2)}</td>
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
                  {/* Standard*/}
                  <td className="px-3 py-2 border">
                    {' '}
                    {machineStandards[machine.machine] ?? 'N/A'}
                  </td>
                  {/* Efficence total */}
                  {/* Mostrar en la celda de "Eficiencia total" */}
                  <td className="px-3 py-2 border">
                    {(() => {
                      const horasTotales =
                        isNaN(horoFin) || isNaN(horoIni)
                          ? 0
                          : horoFin - horoIni;
                      const standardStr =
                        machineStandards[machine.machine] ?? '0';
                      const standard = parseFloat(standardStr);
                      const horasAsignadas =
                        typeof machine.horasAsignadas === 'string'
                          ? parseFloat(machine.horasAsignadas)
                          : machine.horasAsignadas;

                      if (
                        isNaN(horasTotales) ||
                        isNaN(standard) ||
                        isNaN(horasAsignadas)
                      ) {
                        return '0';
                      }

                      const eficiencia =
                        horasTotales - standard * horasAsignadas;
                      return eficiencia.toFixed(2);
                    })()}
                  </td>
                  <td className="px-3 py-2 border relative">
                    {entry.editadoPor && (
                      <span
                        className="cursor-pointer"
                        onMouseEnter={(e) => handleMouseClick(entry, e)}
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
            <strong>Fecha de edición:</strong>{' '}
            {new Date(hoverInfo.fechaUltimaEdicion ?? '').toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default EficencePicado;
