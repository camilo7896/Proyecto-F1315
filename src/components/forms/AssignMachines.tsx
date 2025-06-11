import React, { useEffect, useState } from 'react';
import app from '../../lib/credentialFirebase';
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
  getFirestore
} from 'firebase/firestore';
import Select from 'react-select';

const db = getFirestore(app);

interface Machine {
  id: string;
  abbreviation?: string;
  [key: string]: unknown;
}

interface Assignment {
  id?: string;
  operator: string;
  machines: string[];
  timestamp: Timestamp | null;
}

const AssignMachines: React.FC = () => {
  const [operatorName, setOperatorName] = useState<string>('');
  const [searchOperator, setSearchOperator] = useState<string>('');
  const [machines, setMachines] = useState<Machine[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Estado para modal y contraseña
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(
    null
  );

  // Estado para selección de máquinas
  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);
  const [prevSelectedMachines, setPrevSelectedMachines] = useState<string[]>(
    []
  );

  // Estado para quitar máquina en edición
  const [requirePasswordForRemoval, setRequirePasswordForRemoval] =
    useState(false);
  const [machineToRemove, setMachineToRemove] = useState<string | null>(null);

  // Cargar datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [machinesSnap, assignmentsSnap] = await Promise.all([
          getDocs(collection(db, 'machines')),
          getDocs(collection(db, 'assignments'))
        ]);
        const machinesData: Machine[] = machinesSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as Machine[];
        setMachines(machinesData);

        const assignmentsData: Assignment[] = assignmentsSnap.docs.map(
          (doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              operator: data.operator ?? '',
              machines: data.machines ?? [],
              timestamp: data.timestamp ?? null
            } as Assignment;
          }
        );
        setAssignments(assignmentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredAssignments = assignments.filter((a) =>
    a.operator.toUpperCase().includes(searchOperator.toUpperCase())
  );

  const handleEdit = (assignment: Assignment) => {
    setOperatorName(assignment.operator);
    setSelectedMachines(assignment.machines);
    setPrevSelectedMachines(assignment.machines);
    setEditingId(assignment.id ?? null);
  };

  const isOperatorAssigned = (operator: string): boolean => {
    return assignments.some(
      (a) =>
        a.operator.toUpperCase() === operator.toUpperCase() &&
        a.id !== editingId
    );
  };

  const handleDelete = (assignmentId?: string) => {
    if (!assignmentId) return;
    setAssignmentToDelete(assignmentId);
    setPasswordInput('');
    setShowPasswordModal(true);
  };

  const handleConfirmDelete = async () => {
    if (passwordInput === 'C4ballo.2024*' && assignmentToDelete) {
      try {
        await deleteDoc(doc(db, 'assignments', assignmentToDelete));
        setAssignments((prev) =>
          prev.filter((a) => a.id !== assignmentToDelete)
        );
        alert('Asignación eliminada');
        if (assignmentToDelete === editingId) {
          setOperatorName('');
          setSelectedMachines([]);
          setEditingId(null);
        }
      } catch (error) {
        console.error('Error eliminando:', error);
        alert('Error al eliminar');
      }
    } else {
      alert('Contraseña incorrecta.');
    }
    setShowPasswordModal(false);
    setAssignmentToDelete(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const operatorUpper = operatorName.toUpperCase();

    if (isOperatorAssigned(operatorUpper) && !editingId) {
      alert(
        `El operario "${operatorName}" ya tiene asignada una máquina. Por favor, busque y edite esa asignación.`
      );
      return;
    }

    const newAssignment = {
      operator: operatorUpper,
      machines: selectedMachines,
      timestamp: Timestamp.now()
    };

    try {
      if (editingId) {
        const assignmentRef = doc(db, 'assignments', editingId);
        await updateDoc(assignmentRef, newAssignment);
        setAssignments((prev) =>
          prev.map((a) => (a.id === editingId ? { ...a, ...newAssignment } : a))
        );
        alert('Asignación actualizada');
      } else {
        const docRef = await addDoc(
          collection(db, 'assignments'),
          newAssignment
        );
        setAssignments((prev) => [
          ...prev,
          { id: docRef.id, ...newAssignment }
        ]);
        alert('Asignación guardada');
      }
      setOperatorName('');
      setSelectedMachines([]);
      setPrevSelectedMachines([]);
      setEditingId(null);
      setSearchOperator('');
    } catch (error) {
      console.error('Error al guardar:', error);
      alert('Hubo un error al guardar');
    }
  };

  const machineOptions = machines
    .filter((m) => m.abbreviation)
    .map((m) => ({ value: m.abbreviation!, label: m.abbreviation! }));

  // Función para detectar y gestionar eliminación de máquina en modo edición
  const handleMachineRemove = (machineAbbr: string) => {
    if (editingId && selectedMachines.includes(machineAbbr)) {
      // En modo edición, solicitar contraseña antes de quitar
      setMachineToRemove(machineAbbr);
      setRequirePasswordForRemoval(true);
    } else {
      // En modo crear, quitar directamente
      setSelectedMachines((prev) => prev.filter((m) => m !== machineAbbr));
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-md w-full max-w-full mx-auto backgroundForm">
      <h2 className="text-xl font-bold mb-4 text-white">
        Asignar Máquinas a operarios
      </h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-white">Operario</label>
          <input
            type="text"
            value={operatorName}
            onChange={(e) => setOperatorName(e.target.value)}
            className="w-full border px-3 bg-gray-200 py-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-white">Seleccionar máquinas</label>
          {/* react-select */}
          <Select
            isMulti
            options={machineOptions}
            value={selectedMachines.map((abbr) => ({
              value: abbr,
              label: abbr
            }))}
            placeholder="Buscar y seleccionar máquinas..."
            className="z-0"
            onKeyDown={(e) => {
              if (
                e.key === 'Backspace' &&
                editingId &&
                selectedMachines.length > 0
              ) {
                // Detecta si se quiere quitar la última máquina
                handleMachineRemove(
                  selectedMachines[selectedMachines.length - 1]
                );
                e.preventDefault();
              }
            }}
            // Otra opción: gestionar eliminación en onChange
            onFocus={() => {
              // Guardar estado previo
              setPrevSelectedMachines(selectedMachines);
            }}
            onChange={(newValues) => {
              // Detectar si alguna máquina fue eliminada
              const newAbbrs = Array.isArray(newValues)
                ? newValues.map((v) => v.value)
                : [];
              const removed = prevSelectedMachines.filter(
                (m) => !newAbbrs.includes(m)
              );
              if (removed.length > 0 && editingId) {
                // Solicitar contraseña para quitar máquina
                setMachineToRemove(removed[0]);
                setRequirePasswordForRemoval(true);
                // No modificamos selectedMachines todavía
                // En su lugar, mantenemos el valor previo
                // y en la confirmación del modal, actualizamos
                return;
              }
              setSelectedMachines(newAbbrs);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? 'Actualizar' : 'Asignar'}
        </button>
      </form>
      <div className="bg-gray-700 p-3 mt-5">
        {/* Buscar */}
        <div className="mb-4 mt-5 ">
          <label className="block mb-1 text-white">
            Buscar Código de Operario
          </label>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchOperator}
            onChange={(e) => setSearchOperator(e.target.value)}
            className="w-full border px-3 bg-gray-200 py-2 rounded-md"
          />
        </div>

        {/* Lista de asignaciones */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Operarios y sus asignaciones
          </h3>
          {filteredAssignments.length === 0 ? (
            <p className="text-white">No hay coincidencias.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAssignments.map((a) => (
                <div
                  key={a.id}
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 relative"
                >
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    {a.operator}
                  </h4>
                  <p className="mb-1 text-white">
                    <strong>Máquinas:</strong>{' '}
                    <small className="font-bold text-emerald-500">
                      {a.machines.join(', ')}
                    </small>
                  </p>
                  <p className="mb-1 text-white">
                    <strong>Fecha:</strong>{' '}
                    {a.timestamp
                      ? new Date(a.timestamp.seconds * 1000).toLocaleString()
                      : 'Sin fecha'}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                      onClick={() => handleEdit(a)}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(a.id!)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Modal para contraseña en eliminación */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              Ingrese la contraseña para eliminar
            </h2>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded mb-4"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Contraseña"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => {
                  setShowPasswordModal(false);
                  setMachineToRemove(null);
                  setRequirePasswordForRemoval(false);
                  setPasswordInput('');
                }}
              >
                Cancelar
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleConfirmDelete}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para quitar máquina en edición */}
      {requirePasswordForRemoval && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              Ingrese la contraseña para quitar la máquina
            </h2>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded mb-4"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Contraseña"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => {
                  setRequirePasswordForRemoval(false);
                  setMachineToRemove(null);
                  setPasswordInput('');
                }}
              >
                Cancelar
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  if (passwordInput === 'C4ballo.2024*') {
                    // contraseña correcta, quitar máquina
                    if (machineToRemove) {
                      setSelectedMachines((prev) =>
                        prev.filter((m) => m !== machineToRemove)
                      );
                    }
                  } else {
                    alert('Contraseña incorrecta');
                  }
                  setRequirePasswordForRemoval(false);
                  setMachineToRemove(null);
                  setPasswordInput('');
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignMachines;
