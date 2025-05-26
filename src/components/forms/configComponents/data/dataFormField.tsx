// Campos de formulario de creacion de usuarios
export const dataFormCreateUser = [
  {
    name: 'firstName',
    label: 'Nombres',
    type: 'text',
    required: true,
    placeholder: 'Ingrese sus nombres'
  },
  {
    name: 'lastName',
    label: 'Apellidos',
    type: 'text',
    required: true,
    placeholder: 'Ingrese sus apellidos'
  },
  {
    name: 'code',
    label: 'Codigo',
    type: 'text',
    required: true,
    placeholder: 'Ingrese su codigo'
  },
  {
    name: 'section',
    label: 'Seccion',
    type: 'text',
    required: true,
    placeholder: 'Ingrese su seccion'
  }
];

// Campos de formmulario de creacion de maquina
export const dataFormCreateMachine = [
  {
    name: 'date',
    label: 'Fecha',
    type: 'date',
    required: true,
    placeholder: 'Seleccione una fecha'
  },
  {
    name: 'abbreviation',
    label: 'Abreviacion de maquina',
    type: 'text',
    required: true,
    placeholder: 'e.g., F1315'
  },
  {
    name: 'machineName',
    label: 'Nombre de maquina',
    type: 'text',
    required: true,
    placeholder: 'e.g., Cutter Alpha'
  },
  {
    name: 'efficiency',
    label: 'Eficiencia (%)',
    type: 'number',
    required: true,
    placeholder: 'e.g., 92'
  }
];
