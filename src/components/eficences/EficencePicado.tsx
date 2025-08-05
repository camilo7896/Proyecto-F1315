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
  reference: string;
  paradasMayores: string;
  observaciones: string;
};

type Registro = {
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
};

const EficencePicado: React.FC<{ editable?: boolean }> = ({
  editable = false
}) => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Machine>>({});
  const [editHoras, setEditHoras] = useState<string>('');

  const [fechaFiltro, setFechaFiltro] = useState<string>(''); // en formato 'YYYY-MM-DD'
  const [maquinaFiltro, setMaquinaFiltro] = useState<string>('');

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
  const registrosFiltrados = registros
    .filter((reg) => {
      // Filtro por día
      if (fechaFiltro) {
        return reg.fecha === fechaFiltro;
      }
      return true;
    })
    .filter((reg) => {
      // Filtro por máquina
      if (maquinaFiltro) {
        return reg.machines.some((m) => m.machine === maquinaFiltro);
      }
      return true;
    })
    .filter((reg) =>
      filtroOperario ? reg.operatorCode === filtroOperario : true
    )
    .sort((a, b) => {
      // Ordenar por fecha descendente
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
    })
    .filter((reg) => {
      // Filtro por mes
      if (mesFiltro) {
        const regMes = reg.fecha.slice(0, 7); // 'YYYY-MM'
        return regMes === mesFiltro;
      }
      return true;
    });

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
      paradasMayores:
        editData.paradasMayores ?? originalMachine?.paradasMayores ?? '',
      reference: editData.reference ?? originalMachine?.reference ?? '',
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

  const handleExportCSV = () => {
    const rows = registrosFiltrados.flatMap((reg) =>
      reg.machines.map((machine) => {
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

        const eficiencia =
          !isNaN(totalHoras) && !isNaN(standard) && !isNaN(horasAsignadas)
            ? totalHoras - standard * horasAsignadas
            : 0;

        return {
          Fecha: reg.fecha,
          Código: reg.operatorCode,
          Máquina: machine.machine,
          HorómetroInicial: machine.horometroInicial,
          HorómetroFinal: machine.horometroFinal,
          Reference: machine.reference,
          ParadasMayores: machine.paradasMayores,
          Observaciones: machine.observaciones,
          HorasAsignadas: horasAsignadas,
          TotalHoras: totalHoras,
          Estandar: standard,
          Eficiencia: eficiencia.toFixed(2)
        };
      })
    );

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [
        Object.keys(rows[0]).join(','), // encabezado
        ...rows.map((r) => Object.values(r).join(',')) // filas
      ].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'eficiencia_picado.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-lg overflow-x-auto relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800"></h2>
        <button
          onClick={handleExportCSV}
          className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded shadow cursor-pointer"
        >
          Exportar CSV
        </button>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row mb-4 gap-2 items-center">
        {/* Filtro por día */}
        <div>
          <label className="mr-2 font-semibold">Filtrar por día:</label>
          <input
            type="date"
            value={fechaFiltro}
            onChange={(e) => setFechaFiltro(e.target.value)}
            className="border p-1 rounded"
          />
        </div>
        {/* Filtro por máquina */}
        <div>
          <label className="mr-2 font-semibold">Filtrar por máquina:</label>
          <select
            value={maquinaFiltro}
            onChange={(e) => setMaquinaFiltro(e.target.value)}
            className="border p-1 rounded"
          >
            <option value="">Todas</option>
            {Array.from(
              new Set(
                registros.flatMap((reg) => reg.machines.map((m) => m.machine))
              )
            ).map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

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
      </div>

      {/* Tabla con overflow para responsividad */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full w-full border border-gray-300 text-sm text-left">
          {/* Encabezado */}
          <thead className="backgroundForm text-white">
            <tr>
              <th className="px-3 py-2 border">Fecha</th>
              <th className="px-3 py-2 border">Maquina</th>
              <th className="px-3 py-2 border">Cod.Operario</th>
              <th className="px-3 py-2 border">Horometro inicial</th>
              <th className="px-3 py-2 border">Horometro final</th>
              <th className="px-3 py-2 border">reference</th>
              <th className="px-3 py-2 border">Paradas mayores</th>
              <th className="px-3 py-2 border">Observaciones</th>
              <th className="px-3 py-2 border">Horas Asignadas</th>
              <th className="px-3 py-2 border">Horas trabajadas</th>
              <th className="px-3 py-2 border">Estandar</th>
              <th className="px-3 py-2 border">Eficiencia en horas</th>
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
                } else if (eficiencia >= -10 && eficiencia < 0) {
                  rowClass = 'bg-yellow-200';
                } else if (eficiencia >= -100 && eficiencia < -10) {
                  rowClass = 'bg-red-200';
                }

                const isEditing = editId === reg.id + '-' + index;

                return (
                  <tr
                    key={`${reg.id}-${index}`}
                    className={`hover:bg-gray-100 ${rowClass}`}
                  >
                    <td className="px-3 py-2 border">{reg.fecha}</td>
                    <td className="px-3 py-2 border">{machine.machine}</td>
                    <td className="px-3 py-2 border">{reg.operatorCode}</td>
                    {/* Horómetro inicial */}
                    <td className="px-3 py-2 border">
                      {isEditing ? (
                        <input
                          type="number"
                          step="0.01"
                          value={editData.horometroInicial ?? ''}
                          onChange={(e) =>
                            setEditData((prev) => ({
                              ...prev,
                              horometroInicial: e.target.value
                            }))
                          }
                          className="w-full border p-1"
                        />
                      ) : machine.horometroInicial &&
                        machine.horometroInicial.trim() !== '' ? (
                        parseFloat(machine.horometroInicial).toFixed(2)
                      ) : (
                        '0.00'
                      )}
                    </td>
                    {/* Horómetro final */}
                    <td className="px-3 py-2 border">
                      {isEditing ? (
                        <input
                          type="number"
                          step="0.01"
                          value={editData.horometroFinal ?? ''}
                          onChange={(e) =>
                            setEditData((prev) => ({
                              ...prev,
                              horometroFinal: e.target.value
                            }))
                          }
                          className="w-full border p-1"
                        />
                      ) : machine.horometroFinal &&
                        machine.horometroFinal.trim() !== '' ? (
                        parseFloat(machine.horometroFinal).toFixed(2)
                      ) : (
                        '0.00'
                      )}
                    </td>
                    {/* reference */}
                    <td className="px-3 py-2 border">
                      {machine.reference ? machine.reference : 'N/A'}
                    </td>
                    {/* Paradas mayores */}
                    <td className="px-3 py-2 border">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editData.paradasMayores ?? ''}
                          onChange={(e) =>
                            setEditData((prev) => ({
                              ...prev,
                              paradasMayores: e.target.value
                            }))
                          }
                          className="w-full border p-1"
                        />
                      ) : machine.paradasMayores &&
                        machine.paradasMayores.trim() !== '' ? (
                        machine.paradasMayores
                      ) : (
                        '0.00'
                      )}
                    </td>
                    {/* Observaciones */}
                    <td className="px-3 py-2 border">
                      {machine.observaciones}
                    </td>
                    {/* Horas asignadas */}
                    <td className="px-3 py-2 border">
                      {isEditing ? (
                        <input
                          type="number"
                          step="0.01"
                          value={editHoras}
                          onChange={(e) => setEditHoras(e.target.value)}
                          className="w-full border p-1 "
                          min="0"
                        />
                      ) : (
                        mostrarHoras(machine.horasAsignadas || 0.0)
                      )}
                    </td>
                    {/* Total horas */}
                    <td className="px-3 py-2 border">
                      {totalHoras.toFixed(2)}
                    </td>
                    {/* Stand */}
                    <td className="px-3 py-2 border">
                      {machineStandards[machine.machine] ?? 'N/A'}
                    </td>
                    {/* Eficiencia */}
                    <td className="px-3 py-2 border">
                      {eficiencia.toFixed(2)}
                    </td>
                    {/* Acciones */}
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
                    <td className="px-3 py-2 border text-center">
                      {reg.editadoPor && (
                        <div className="relative group inline-block">
                          <span className="cursor-pointer text-blue-600">
                            👤
                          </span>

                          <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 z-50 hidden group-hover:block bg-white text-gray-800 text-xs p-3 rounded shadow-lg w-52 text-left">
                            <p className="mb-1">
                              🧑 <strong>Editado por:</strong>
                              <br />
                              {reg.editadoPor}
                            </p>
                            <p>
                              📅 <strong>Fecha:</strong>
                              <br />
                              {reg.fechaUltimaEdicion
                                ? new Date(
                                    reg.fechaUltimaEdicion
                                  ).toLocaleString()
                                : 'Sin fecha'}
                            </p>
                          </div>
                        </div>
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
