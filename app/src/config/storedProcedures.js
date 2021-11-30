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
    inputs: [],
  },
  {
    route: "/AvailablePaquete",
    name: "Paquete disponible",
    description: "Obtiene los paquetes disponibles para determinada fecha",
    inputs: [],
  },
  {
    route: "/checar_acompanantes",
    name: "Checar acompañantes",
    description:
      "Verifica que determinado acompañante ya esté instanciado dentro de la tabla huesped_acompana para no volverlo a registrar",
    inputs: [],
  },
  {
    route: "/CambiarHab",
    name: "Cambiar habitación",
    description:
      "Actualiza informacion relativa al traslado de un huesped de una habitacion a otra: cobros, referencia de huespedes, actualizacion de estado de disponibildiad de habitaciones",
    inputs: [],
  },
];

export default storedProcedures;
