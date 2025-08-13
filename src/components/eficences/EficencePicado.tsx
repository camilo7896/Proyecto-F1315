import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc
} from 'firebase/firestore';

import app from '../../lib/credentialFirebase';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);
const auth = getAuth();

type Machine = {
  horasAsignadas: string | number;
  horometroFinal: string;
  horometroInicial: string;
  machine: string;
  reference: string;
  paradasMayores: string;
  observaciones: string;
  fechaHora?: string;
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
  detallesEdicion?: {
    usuario: string;
    fechaHora: string;
    valorAnterior: Partial<Machine>;
    valorNuevo: Partial<Machine>;
  }[];
};

const EficencePicado: React.FC<{ editable?: boolean }> = ({
  editable = false
}) => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Machine>>({});
  const [editHoras, setEditHoras] = useState<string>('');
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);

  // modal de quien edito
  const [modalVisible, setModalVisible] = useState(false);
  const [registroDetalleModal, setRegistroDetalleModal] =
    useState<Registro | null>(null);

  const handleMostrarDetalles = (reg: Registro) => {
    setRegistroDetalleModal(reg);
    setModalVisible(true);
  };

  const handleCerrarModal = () => {
    setModalVisible(false);
    setRegistroDetalleModal(null);
  };

  // *********************************************

  const [fechaFiltro, setFechaFiltro] = useState<string>('');
  const [maquinaFiltro, setMaquinaFiltro] = useState<string>('');
  const [machineStandards, setMachineStandards] = useState<
    Record<string, string>
  >({});
  const [mesFiltro, setMesFiltro] = useState<string>(() => {
    const ahora = new Date();
    return ahora.toISOString().slice(0, 7);
  });
  const [filtroOperario, setFiltroOperario] = useState<string>('');

  // Obtener email del usuario logueado
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setCurrentUserEmail(user.email);
    }
  }, []);

  // Carga datos y estándares
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

  const formatearFecha = (fechaISO: string) => {
    if (!fechaISO) return '';
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
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

  const operarios = Array.from(new Set(registros.map((r) => r.operatorCode)));

  const registrosFiltrados = registros
    .filter((reg) => {
      if (fechaFiltro) {
        return reg.fecha === fechaFiltro;
      }
      return true;
    })
    .filter((reg) => {
      if (maquinaFiltro) {
        return reg.machines.some((m) => m.machine === maquinaFiltro);
      }
      return true;
    })
    .filter((reg) =>
      filtroOperario ? reg.operatorCode === filtroOperario : true
    )
    .sort((a, b) => {
      return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
    })
    .filter((reg) => {
      if (mesFiltro) {
        const regMes = reg.fecha.slice(0, 7);
        return regMes === mesFiltro;
      }
      return true;
    });

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

  const handleEdit = (reg: Registro, machineIndex: number) => {
    setEditId(reg.id + '-' + machineIndex);
    const machine = reg.machines[machineIndex];

    const fechaISO = reg.fecha;
    const dateObj = new Date(fechaISO);
    const fechaHoraLocal = dateObj.toISOString().slice(0, 16);

    setEditData({ ...machine, fechaHora: fechaHoraLocal });
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

    const valoresOriginales: Machine = originalMachine ?? {
      horasAsignadas: '',
      horometroFinal: '',
      horometroInicial: '',
      machine: '',
      reference: '',
      paradasMayores: '',
      observaciones: ''
    };

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

    let fechaISO = reg.fecha;
    if (editData.fechaHora) {
      fechaISO = new Date(editData.fechaHora).toISOString();
    }

    const camposModificados: {
      campo: string;
      valorAnterior: unknown;
      valorNuevo: unknown;
    }[] = [];
    (Object.keys(newMachines[machineIndex]) as (keyof Machine)[]).forEach(
      (campo) => {
        const valorAnterior = valoresOriginales[campo];
        const valorNuevo = (newMachines[machineIndex] as Machine)[campo];

        if (valorAnterior !== valorNuevo) {
          camposModificados.push({ campo, valorAnterior, valorNuevo });
        }
      }
    );
    // Aquí puedes detectar cambios y agregar a camposModificados si quieres

    const fechaHora = new Date().toLocaleString('es-CO');
    const usuario = currentUserEmail ?? 'Desconocido';

    try {
      await updateDoc(doc(db, 'registro_horometros', regId), {
        machines: newMachines,
        fecha: fechaISO,
        editadoPor: usuario,
        camposModificados: camposModificados.join(', '),
        fechaUltimaEdicion: new Date().toISOString(),
        detallesEdicion: [
          ...(reg.detallesEdicion ?? []),
          {
            usuario: usuario,
            fechaHora: fechaHora,
            valorAnterior: camposModificados.reduce((acc, c) => {
              acc[c.campo as keyof Machine] = c.valorAnterior as
                | string
                | undefined;
              return acc;
            }, {} as Partial<Machine>),
            valorNuevo: camposModificados.reduce((acc, c) => {
              acc[c.campo as keyof Machine] = c.valorNuevo as
                | string
                | undefined;
              return acc;
            }, {} as Partial<Machine>)
          }
        ]
      });
      const newRegistros = [...registros];
      newRegistros[index] = { ...reg, machines: newMachines, fecha: fechaISO };
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
    const headers = [
      'Fecha',
      'Código',
      'Máquina',
      'Horómetro inicial',
      'Horómetro final',
      'Reference',
      'Paradas mayores',
      'Observaciones',
      'Horas Asignadas',
      'Horas trabajadas',
      'Estandar',
      'Eficiencia'
    ];

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
          'Horómetro inicial': machine.horometroInicial,
          'Horómetro final': machine.horometroFinal,
          Reference: machine.reference,
          'Paradas mayores': machine.paradasMayores,
          Observaciones: machine.observaciones,
          'Horas Asignadas': horasAsignadas,
          'Horas trabajadas': totalHoras.toFixed(2),
          Estandar: standard,
          Eficiencia: eficiencia.toFixed(2)
        };
      })
    );

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [
        headers.join(','),
        ...rows.map((row) =>
          headers
            .map(
              (h) => `"${String((row as Record<string, unknown>)[h] ?? '')}"`
            )
            .join(',')
        )
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
      {/* Filtros */}
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
      {/* Filtros mes y operario */}
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
      {/* Tabla */}
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
              reg.machines
                .filter((m) => !maquinaFiltro || m.machine === maquinaFiltro)
                .map((machine, index) => {
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

                  let rowClass = '';
                  if (eficiencia > 0) {
                    rowClass = 'bg-green-200';
                  } else if (eficiencia <= 0 && eficiencia > -1) {
                    rowClass = 'bg-yellow-200';
                  } else if (eficiencia <= -1 && eficiencia >= -100) {
                    rowClass = 'bg-red-200';
                  }

                  const isEditing = editId === reg.id + '-' + index;

                  return (
                    <tr
                      key={`${reg.id}-${index}`}
                      className={`hover:bg-gray-100 ${rowClass}`}
                    >
                      {/* Fecha y hora */}
                      <td className="px-3 py-2 border">
                        {isEditing ? (
                          <input
                            type="datetime-local"
                            value={editData.fechaHora ?? ''}
                            onChange={(e) =>
                              setEditData((prev) => ({
                                ...prev,
                                fechaHora: e.target.value
                              }))
                            }
                            className="w-full border p-1"
                          />
                        ) : (
                          formatearFecha(reg.fecha)
                        )}
                      </td>{' '}
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
                      {/* Horas trabajadas */}
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
                      {/* Icono usuario con detalles */}
                      <td className="px-3 py-2 border text-center">
                        {reg.detallesEdicion &&
                          reg.detallesEdicion.length > 0 && (
                            <div
                              className="relative inline-block cursor-pointer"
                              onClick={() => handleMostrarDetalles(reg)}
                            >
                              <span className="text-blue-600">👤</span>
                            </div>
                          )}
                      </td>
                    </tr>
                  );
                })
            )}
          </tbody>
        </table>
        {modalVisible && registroDetalleModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full max-h-full overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">
                Detalles de Edición
              </h2>
              <button
                className="absolute top-2 right-2 text-red-600 font-bold"
                onClick={handleCerrarModal}
              >
                ✖
              </button>
              {registroDetalleModal.detallesEdicion?.map((detalle, idx) => (
                <div key={idx} className="mb-4 border-b border-gray-300 pb-2">
                  <p>
                    <strong>Usuario:</strong> {detalle.usuario}
                  </p>
                  <p>
                    <strong>Fecha y hora:</strong> {detalle.fechaHora}
                  </p>
                  <div>
                    <strong>Modificaciones:</strong>
                    <ul>
                      {Object.keys(detalle.valorAnterior).map((campo) => {
                        const anterior = (
                          detalle.valorAnterior as Partial<Machine>
                        )[campo as keyof Machine];
                        const nuevo = (detalle.valorNuevo as Partial<Machine>)[
                          campo as keyof Machine
                        ];

                        if (anterior !== nuevo) {
                          return (
                            <li key={campo}>
                              <strong>{campo}:</strong> {anterior} &rarr;{' '}
                              {nuevo}
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
