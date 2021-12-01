// // fecha date, importe double, id_huesped  int, importe_final double
// router.post("/factura/:fecha/:importe/:id_huesped/:importe_final", postFactura);

// // nombre string(50), fecha_nacimiento date, direccion string(50), email string(50), telefonos int, ciudad string(20), estado string(20), pais string(20), medio string(15)
// router.post(
//   "/huesped_paga/:nombre/:fecha_nacimiento/:direccion/:email/:rfc/:tel_casa/:tel_celular/:ciudad/:estado/:pais/:medio",
//   postHuespedPaga
// );

// // nombre string(50), fecha date, email string(50), id int
// router.post(
//   "/huesped_acompana/:nombre_acompanante/:fecha_nac/:email/:id_huesped",
//   postHuespedAcompana
// );

// // quejaI int, facturaI int, queja string
// router.post("/quejas/:quejaI/:facturaI/:queja", postQuejas);

// // fecha date, id's int
// router.post(
//   "/registro/:fechaI/:fechaS/:id_huesped/:id_empleado/:id_paquete",
//   postRegistro
// );

// // num_personas int, num_noches int, deposito double, medio string(15), email string(50), id's int, estado string(20), fecha date
// router.post(
//   "/reservacion/:num_personas/:num_noches/:deposito/:medio/:email_reservador/:id_huesped/:id_paquete/:estado/:fecha_inicio",
//   postReservacion
// );

// // servicio string(50), costo double, tipo bool, descripcion string, hora time_without_time_zone, fecha date
// router.post(
//   "/servicio/:servicio/:costo_por_persona/:tipo/:descripcion/:hora_inicio/:hora_fin/:fecha",
//   postServicio
// );

// // precio double, tipo_cama string(20), numero int, nombre string(20)
// router.post("/tipo/:precio/:tipo_cama/:numero_camas/:nombre", postTipo);

// // nombre string(25), id int
// router.post("/departamento/:nombre/:id_super", postDepartamento);

// // nombre string(50), double, string(1), int
// router.post(
//   "/empleados/:nombre_completo/:salario/:sexo/:id_departamento",
//   postEmpleados
// );

// // int, int
// router.post(
//   "/habitaciones_por_registro/:numero_habitacion/:id_registro",
//   posthabitaciones_por_registro
// );

// // int, int
// router.post(
//   "/habitaciones_por_reservacion/:numero_habitacion/:id_reservacion",
//   postHabitaciones_por_reservacion
// );

// // int, int
// router.post(
//   "/huesped_por_habitacion/:numero_habitacion:/id_huesped",
//   postHuesped_por_habitacion
// );

// // int, int
// router.post(
//   "/quejas_por_departamento/:id_departamento/:id_queja",
//   postQuejas_por_departamento
// );

// // int, int , int
// router.post("/satisfaccion/:id_factura/:valor/:id_depto", postSatisfaccion);

// // int, int, double, date
// router.post(
//   "/servicios_por_habitacion/:numero_habitacion/:id_servicio/:importe/:fecha",
//   postServicios_por_habitacion
// );

// // int, int
// router.post(
//   "/servicios_por_paquete/:id_paquete/:id_servicio",
//   postServicios_por_paquete
// );

// Posts
const posts = [
  {
    route: "/factura",
    inputs: [
      { type: "date", name: "Fecha" },
      { type: "double", name: "Importe" },
      { type: "int", name: "ID del huesped" },
      { type: "double", name: "Importe final" },
    ],
    name: "Inserción en Factura",
    description: "Inserta en la tabla Factura",
  },
  {
    route: "/huesped_paga",
    inputs: [
      { type: "string_50", name: "Nombre" },
      { type: "date", name: "Fecha de nacimiento" },
      { type: "string_50", name: "Dirección" },
      { type: "string_50", name: "Email" },
      { type: "int", name: "Teléfonos" },
      { type: "string_20", name: "Ciudad" },
      { type: "string_20", name: "Estado" },
      { type: "string_20", name: "País" },
      { type: "string_15", name: "Medio" },
    ],
    name: "Inserción en Huesped de paga",
    description: "Inserta en la tabla Huesped de paga",
  },
  {
    route: "/huesped_acompana",
    inputs: [
      { type: "string_50", name: "Nombre" },
      { type: "date", name: "Fecha de nacimiento" },
      { type: "string_50", name: "Email" },
      { type: "int", name: "ID" },
    ],
    name: "Inserción en Huesped acompañante",
    description: "Inserta en la tabla Huesped acompañante",
  },
  {
    route: "/quejas",
    inputs: [
      { type: "int", name: "QuejaI" },
      { type: "int", name: "FacturaI" },
      { type: "string_50", name: "Queja" },
    ],
    name: "Inserción en Quejas",
    description: "Inserta en la tabla Quejas",
  },
  {
    route: "/registro",
    inputs: [
      { type: "date", name: "FechaI" },
      { type: "date", name: "FechaS" },
      { type: "int", name: "ID del huesped" },
      { type: "int", name: "ID del empleado" },
      { type: "int", name: "ID del paquete" },
    ],
    name: "Inserción en Registro",
    description: "Inserta en la tabla Registro",
  },
  {
    route: "/reservacion",
    inputs: [
      { type: "int", name: "Número de personas" },
      { type: "int", name: "Número de noches" },
      { type: "double", name: "Depósito" },
      { type: "string_15", name: "Medio" },
      { type: "string_50", name: "Email" },
      { type: "int", name: "ID del huesped" },
      { type: "int", name: "ID del paquete" },
      { type: "string_50", name: "Estado" },
      { type: "date", name: "Fecha de inicio" },
    ],
    name: "Inserción en Reservación",
    description: "Inserta en la tabla Reservación",
  },
  {
    route: "/servicio",
    inputs: [
      { type: "string_50", name: "Servicio" },
      { type: "double", name: "Costo" },
      { type: "boolean", name: "Tipo" },
      { type: "string_50", name: "Descripción" },
      { type: "hour", name: "Hora" },
      { type: "date", name: "Fecha" },
    ],
    name: "Inserción en Servicio",
    description: "Inserta en la tabla Servicio",
  },
  {
    route: "/tipo",
    inputs: [
      { type: "double", name: "Precio" },
      { type: "string_20", name: "Tipo de cama" },
      { type: "int", name: "Número" },
      { type: "string_20", name: "Nombre" },
    ],
    name: "Inserción en Tipo",
    description: "Inserta en la tabla Tipo",
  },
  {
    route: "/departamento",
    inputs: [
      { type: "string_25", name: "Nombre" },
      { type: "int", name: "ID" },
    ],
    name: "Inserción en Departamento",
    description: "Inserta en la tabla Departamento",
  },
  {
    route: "/empleados",
    inputs: [
      { type: "string_50", name: "Nombre" },
      { type: "double", name: "Salario" },
      { type: "string_1", name: "Sexo" },
      { type: "int", name: "ID del departamento" },
    ],
    name: "Inserción en Empleados",
    description: "Inserta en la tabla Empleados",
  },
  {
    route: "/habitaciones_por_registro",
    inputs: [
      { type: "int", name: "Número de habitación" },
      { type: "int", name: "ID del registro" },
    ],
    name: "Inserción en Habitaciones por registro",
    description: "Inserta en la tabla Habitaciones por registro",
  },
  {
    route: "/habitaciones_por_reservacion",
    inputs: [
      { type: "int", name: "Número de habitación" },
      { type: "int", name: "ID de la reservación" },
    ],
    name: "Inserción en Habitaciones por reservación",
    description: "Inserta en la tabla Habitaciones por reservación",
  },
  {
    route: "/huesped_por_habitacion",
    inputs: [
      { type: "int", name: "Número de habitación" },
      { type: "int", name: "ID del huesped" },
      { type: "int", name: "ID del registro" },
    ],
    name: "Inserción en Huesped por habitación",
    description: "Inserta en la tabla Huesped por habitación",
  },
  {
    route: "/quejas_por_departamento",
    inputs: [
      { type: "int", name: "ID del departamento" },
      { type: "int", name: "ID de la queja" },
    ],
    name: "Inserción en Quejas por departamento",
    description: "Inserta en la tabla Quejas por departamento",
  },
  {
    route: "/satisfaccion",
    inputs: [
      { type: "int", name: "ID de la factura" },
      { type: "int", name: "Valor" },
      { type: "int", name: "ID del departamento" },
    ],
    name: "Inserción en Satisfacción",
    description: "Inserta en la tabla Satisfacción",
  },
  {
    route: "/servicios_por_habitacion",
    inputs: [
      { type: "int", name: "Número de habitación" },
      { type: "int", name: "ID del servicio" },
      { type: "double", name: "Importe" },
      { type: "date", name: "Fecha" },
    ],
    name: "Inserción en Servicios por habitación",
    description: "Inserta en la tabla Servicios por habitación",
  },
  {
    route: "/servicios_por_paquete",
    inputs: [
      { type: "int", name: "ID del paquete" },
      { type: "int", name: "ID del servicio" },
    ],
    name: "Inserción en Servicios por paquete",
    description: "Inserta en la tabla Servicios por paquete",
  },
];

export default posts;
// string_X, int, double, boolean, date, hour
