const storedProcedures = [
  {
    route: "/bonos",
    name: "Bonos",
    description:
      "Genera logs de los bonos obtenidos para cada empleado que trabaja en mostrador por sus registros de huespedes",
    inputs: [],
  },
  {
    route: "/aplicar_desc",
    name: "Aplicar descuento",
    description:
      "Genera una vista mostrando los valores por tipo de habitacion aplicando el descuento del pquete elegido por usuario",
    inputs: [{ type: "int", name: "ID del paquete" }],
  },
  {
    route: "/AvailablePaquete",
    name: "Paquete disponible",
    description: "Obtiene los paquetes disponibles para determinada fecha",
    inputs: [{ type: "date", name: "Fecha de inicio" }],
  },
  {
    route: "/checar_acompanantes",
    name: "Checar acompañantes",
    description:
      "Verifica que determinado acompañante ya esté instanciado dentro de la tabla huesped_acompana para no volverlo a registrar",
    inputs: [
      { type: "string_50", name: "Nombre del acompañante" },
      { type: "int", name: "ID del huesped" },
      { type: "date", name: "Fecha" },
      { type: "string_50", name: "Email" },
    ],
  },
  {
    route: "/CambiarHab",
    name: "Cambiar habitación",
    description:
      "Actualiza informacion relativa al traslado de un huesped de una habitacion a otra: cobros, referencia de huespedes, actualizacion de estado de disponibildiad de habitaciones",
    inputs: [
      { type: "int", name: "HabitaciónV" },
      { type: "int", name: "HabitaciónN" },
      { type: "int", name: "Reg" },
    ],
  },
];

export default storedProcedures;
