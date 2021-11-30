const gets = [
  {
    route: "/habitacion",
    inputs: [],
    name: "Obtener: Habitación",
    description: "Obtiene los registros de la tabla Habitación",
  },
  {
    route: "/habitacion",
    inputs: [
      { type: "int", name: "Edificio" },
      { type: "int", name: "Piso" },
      { type: "string_50", name: "Estado de disponibilidad" },
      { type: "string_50", name: "ID tipo" },
    ],
    name: "Obtener: Habitación por filtros",
    description: "Obtiene los registros de la tabla Habitación por filtros",
  },
  {
    route: "/marco",
    inputs: [],
    name: "Obtener: Marco",
    description: "Obtiene los registros de la tabla Marco",
  },
  {
    route: "/factura",
    inputs: [],
    name: "Obtener: Factura",
    description: "Obtiene los registros de la tabla Factura",
  },
  {
    route: "/departamento",
    inputs: [],
    name: "Obtener: Departamento",
    description: "Obtiene los registros de la tabla Departamento",
  },
  {
    route: "/empleado",
    inputs: [],
    name: "Obtener: Empleado",
    description: "Obtiene los registros de la tabla Empleado",
  },
  {
    route: "/habitaciones_por_registro",
    inputs: [],
    name: "Obtener: Habitaciones por registro",
    description: "Obtiene los registros de la tabla Habitaciones por registro",
  },
  {
    route: "/habitaciones_por_reservacion",
    inputs: [],
    name: "Obtener: Habitaciones por reservación",
    description:
      "Obtiene los registros de la tabla Habitaciones por reservación",
  },
  {
    route: "/huesped_acompana",
    inputs: [],
    name: "Obtener: Huesped acompañante",
    description: "Obtiene los registros de la tabla Huesped acompañante",
  },
  {
    route: "/paquetes",
    inputs: [],
    name: "Obtener: Paquetes",
    description: "Obtiene los registros de la tabla Paquetes",
  },
  {
    route: "/quejas",
    inputs: [],
    name: "Obtener: Quejas",
    description: "Obtiene los registros de la tabla Quejas",
  },
  {
    route: "/quejas_por_depto",
    inputs: [],
    name: "Obtener: Quejas por departamento",
    description: "Obtiene los registros de la tabla Quejas por departamento",
  },
  {
    route: "/registro",
    inputs: [],
    name: "Obtener: Registro",
    description: "Obtiene los registros de la tabla Registro",
  },
  {
    route: "/reservaciones",
    inputs: [],
    name: "Obtener: Reservaciones",
    description: "Obtiene los registros de la tabla Reservaciones",
  },
  {
    route: "/satisfaccion",
    inputs: [],
    name: "Obtener: Satisfacción",
    description: "Obtiene los registros de la tabla Satisfacción",
  },
  {
    route: "/servicio",
    inputs: [],
    name: "Obtener: Servicio",
    description: "Obtiene los registros de la tabla Servicio",
  },
  {
    route: "/servicios_por_habitacion",
    inputs: [],
    name: "Obtener: Servicios por habitación",
    description: "Obtiene los registros de la tabla Servicios por habitación",
  },
  {
    route: "/servicios_por_paquete",
    inputs: [],
    name: "Obtener: Servicios por paquete",
    description: "Obtiene los registros de la tabla Servicios por paquete",
  },
  {
    route: "/tipo",
    inputs: [],
    name: "Obtener: Tipo",
    description: "Obtiene los registros de la tabla Tipo",
  },
  {
    route: "huesped_por_habitacion",
    inputs: [],
    name: "Obtener: Huesped por habitación",
    description: "Obtiene los registros de la tabla Huesped por habitación",
  },
];

export default gets;
// edicicio int, piso int, estado_disponiblidad string, id_tipo string
