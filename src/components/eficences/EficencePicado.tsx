import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc
} from 'firebase/firestore';

import app from '../../lib/credentialFirebase';
import { useEffect, useState } from 'react';

const db = getFirestore(app);

type Machine = {
  horasAsignadas: string | number;
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
  observaciones: string;
};

type Registro = {
  id: string;
  fecha: string;
  operatorCode: string;
  operatorName: string;
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
  const [editHoras, setEditHoras] = useState<string>('');

  const [machineStandards, setMachineStandards] = useState<
    Record<string, string>
  >({});

  const [mesFiltro, setMesFiltro] = useState<string>(() => {
    const ahora = new Date();
    return ahora.toISOString().slice(0, 7);
  });

  // Filtros adicionales
  const [filtroOperario, setFiltroOperario] = useState<string>('');

  // Cargar datos y estándares
  const fetchMachineStandards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'machines'));
      const standards: Record<string, string> = {};
      querySnapshot.forEach((doc) => {
        const data = doc.data();
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
        const data: Registro[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Registro, 'id'>)
        }));
        setRegistros(data);
      } catch (error) {
        console.error('Error fetching registros:', error);
      }
    };
    fetchData();
    fetchMachineStandards();
  }, []);

  // Lista de operarios y máquinas únicos
  const operarios = Array.from(new Set(registros.map((r) => r.operatorCode)));

  // Filtrado adicional
  // Filtrado adicional
  const registrosFiltrados = registros
    .filter((reg) => reg.fecha.startsWith(mesFiltro))
    .filter((reg) =>
      filtroOperario ? reg.operatorCode === filtroOperario : true
    );
  // Cálculo de eficiencia total
  const sumaEficienciaTotal = registrosFiltrados.reduce((sum, reg) => {
    reg.machines.forEach((machine) => {
      const horoFin = parseFloat(machine.horometroFinal);
      const horoIni = parseFloat(machine.horometroInicial);
      const totalHoras =
        isNaN(horoFin) || isNaN(horoIni) ? 0 : horoFin - horoIni;

      const standardStr = machineStandards[machine.machine] ?? '0';
      const standard = parseFloat(standardStr);
      const horasAsignadas =
        typeof machine.horasAsignadas === 'string'
          ? parseFloat(machine.horasAsignadas)
          : machine.horasAsignadas;

      if (!isNaN(totalHoras) && !isNaN(standard) && !isNaN(horasAsignadas)) {
        const eficiencia = totalHoras - standard * horasAsignadas;
        sum += eficiencia;
      }
    });
    return sum;
  }, 0);

  // Funciones para editar
  const handleEdit = (reg: Registro, machineIndex: number) => {
    setEditId(reg.id + '-' + machineIndex);
    const machine = reg.machines[machineIndex];
    setEditData(machine);
    setEditHoras(String(machine.horasAsignadas));
  };

  const handleSave = async (regId: string, machineIndex: number) => {
    const index = registros.findIndex((r) => r.id === regId);
    if (index === -1) return;
    const reg = registros[index];

    const horasNum = parseFloat(editHoras);
    if (isNaN(horasNum)) {
      alert('Ingrese un número válido para horas.');
      return;
    }

    const newMachines = [...reg.machines];
    const originalMachine = reg.originalMachines
      ? reg.originalMachines[machineIndex]
      : undefined;

    newMachines[machineIndex] = {
      horasAsignadas: horasNum,
      horometroFinal:
        editData.horometroFinal ?? originalMachine?.horometroFinal ?? '',
      horometroInicial:
        editData.horometroInicial ?? originalMachine?.horometroInicial ?? '',
      machine: editData.machine ?? originalMachine?.machine ?? '',
      observaciones:
        editData.observaciones ?? originalMachine?.observaciones ?? ''
    };

    const camposModificados: string[] = [];
    [
      'horometroInicial',
      'horometroFinal',
      'machine',
      'observaciones',
      'horasAsignadas'
    ].forEach((k) => {
      const originalVal = originalMachine?.[k as keyof Machine];
      const newVal = newMachines[machineIndex][k as keyof Machine];
      if (k === 'horasAsignadas') {
        if (parseFloat(String(originalVal)) !== horasNum) {
          camposModificados.push(k);
        }
      } else {
        if (newVal !== originalVal) {
          camposModificados.push(k);
        }
      }
    });

    try {
      await updateDoc(doc(db, 'registro_horometros', regId), {
        machines: newMachines,
        editadoPor: 'usuario', // reemplaza con usuario real
        camposModificados: camposModificados.join(', '),
        fechaUltimaEdicion: new Date().toISOString()
      });
      const newRegistros = [...registros];
      newRegistros[index] = { ...reg, machines: newMachines };
      setRegistros(newRegistros);
      setEditId(null);
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  };

  const mostrarHoras = (valor: string | number) => {
    return typeof valor === 'number' ? valor.toFixed(2) : String(valor);
  };

  return (
    <div className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-lg overflow-x-auto relative">
      {/* Filtros por mes, operario y máquina */}
      <div className="flex flex-col md:flex-row mb-4 gap-2 items-center">
        {/* filtro mes */}
        <div>
          <label className="mr-2 font-semibold">Filtrar por mes:</label>
          <input
            type="month"
            value={mesFiltro}
            onChange={(e) => setMesFiltro(e.target.value)}
            className="border p-1 rounded"
          />
        </div>
        {/* filtro operario */}
        <div>
          <label className="mr-2 font-semibold">Filtrar por operario:</label>
          <select
            value={filtroOperario}
            onChange={(e) => setFiltroOperario(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="">Todos</option>
            {operarios.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
        {/* filtro maquina */}
        {/* <div>
          <label className="mr-2 font-semibold">Filtrar por máquina:</label>
          <select
            value={filtroMaquina}
            onChange={(e) => setFiltroMaquina(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="">Todas</option>
            {maquinas.map((ma) => (
              <option key={ma} value={ma}>
                {ma}
              </option>
            ))}
          </select>
        </div> */}
      </div>

      {/* Envuelve la tabla en un div con overflow-x-auto para responsividad */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full w-full border border-gray-300 text-sm text-left">
          {/* Encabezado */}
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
              <th className="px-3 py-2 border">Horas Asignadas</th>
              <th className="px-3 py-2 border">Total horas</th>
              <th className="px-3 py-2 border">Stand</th>
              <th className="px-3 py-2 border">Eficiencia</th>
              {editable && <th className="px-3 py-2 border">Acciones</th>}
              <th className="px-3 py-2 border">📝</th>
            </tr>
          </thead>
          {/* Cuerpo */}
          <tbody>
            {registrosFiltrados.flatMap((reg) =>
              reg.machines.map((machine, index) => {
                const horoFin = parseFloat(machine.horometroFinal);
                const horoIni = parseFloat(machine.horometroInicial);
                const totalHoras =
                  isNaN(horoFin) || isNaN(horoIni) ? 0 : horoFin - horoIni;

                const standardStr = machineStandards[machine.machine] ?? '0';
                const standard = parseFloat(standardStr);
                const horasAsignadas =
                  typeof machine.horasAsignadas === 'string'
                    ? parseFloat(machine.horasAsignadas)
                    : machine.horasAsignadas;

                let eficiencia = 0;
                if (
                  !isNaN(totalHoras) &&
                  !isNaN(standard) &&
                  !isNaN(horasAsignadas)
                ) {
                  eficiencia = totalHoras - standard * horasAsignadas;
                }

                // determinar color de fila
                let rowClass = '';
                if (eficiencia >= 0) {
                  rowClass = 'bg-green-200';
                } else if (eficiencia >= -5 && eficiencia < 0) {
                  rowClass = 'bg-yellow-200';
                } else if (eficiencia >= -100 && eficiencia < -5) {
                  rowClass = 'bg-red-200';
                }

                const isEditing = editId === reg.id + '-' + index;

                return (
                  <tr
                    key={`${reg.id}-${index}`}
                    className={`hover:bg-gray-100 ${rowClass}`}
                  >
                    <td className="px-3 py-2 border">{reg.fecha}</td>
                    <td className="px-3 py-2 border">{reg.operatorCode}</td>
                    <td className="px-3 py-2 border">{machine.machine}</td>
                    <td className="px-3 py-2 border">
                      {machine.horometroInicial}
                    </td>
                    <td className="px-3 py-2 border">
                      {machine.horometroFinal}
                    </td>
                    <td className="px-3 py-2 border">{reg.reference || ''}</td>
                    <td className="px-3 py-2 border">{reg.majorStops || ''}</td>
                    <td className="px-3 py-2 border">
                      {machine.observaciones}
                    </td>
                    <td className="px-3 py-2 border">
                      {isEditing ? (
                        <input
                          type="number"
                          step="0.01"
                          value={editHoras}
                          onChange={(e) => setEditHoras(e.target.value)}
                          className="w-full border p-1"
                          min="0"
                        />
                      ) : (
                        mostrarHoras(machine.horasAsignadas)
                      )}
                    </td>
                    <td className="px-3 py-2 border">
                      {totalHoras.toFixed(2)}
                    </td>
                    <td className="px-3 py-2 border">
                      {machineStandards[machine.machine] ?? 'N/A'}
                    </td>
                    <td className="px-3 py-2 border">
                      {eficiencia.toFixed(2)}
                    </td>
                    {editable && (
                      <td className="px-3 py-2 border">
                        {isEditing ? (
                          <button
                            onClick={() => handleSave(reg.id, index)}
                            className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                          >
                            Guardar
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEdit(reg, index)}
                            className="bg-gray-500 text-white px-2 py-1 rounded cursor-pointer"
                          >
                            Editar
                          </button>
                        )}
                      </td>
                    )}
                    {/* icono de usuario */}
                    <td className="px-3 py-2 border relative">
                      {reg.editadoPor && (
                        <span
                          className="cursor-pointer"
                          onMouseEnter={() => {}}
                          onMouseLeave={() => {}}
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
      </div>

      {/* Mostrar total con color */}
      <div
        className={`mt-4 p-2 rounded shadow ${
          sumaEficienciaTotal >= 0
            ? 'bg-green-200 text-green-800'
            : sumaEficienciaTotal >= -5 && sumaEficienciaTotal <= -0.1
              ? 'bg-yellow-200 text-yellow-800'
              : 'bg-red-200 text-red-800'
        }`}
      >
        <strong>Total eficiencia del mes: </strong>
        {sumaEficienciaTotal.toFixed(2)}
      </div>
    </div>
  );
};

export default EficencePicado;
