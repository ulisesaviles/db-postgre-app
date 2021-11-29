import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);

  const queries = [
    // 1
    {
      description: "Factura del servicio de estadía en Hotel.",
      inputType: ["id"],
    },
    // 2
    {
      description:
        "Reporte de habitaciones disponibles clasificado por tipo de habitación.",
      inputType: [null],
    },
    // 3
    {
      description:
        "Reporte de habitaciones ocupadas y número de huéspedes por fecha determinada.",
      inputType: ["twoDates"],
    },
    // 4
    {
      description:
        "Reporte de ocupación del hotel clasificado por temporada en un rango de fechas dado.",
      inputType: ["twoDates"],
    },
    // 5
    {
      description:
        "Reporte del tipo de habitación con su descripción y números de habitaciones disponible del  hotel.",
      inputType: [null, "id"],
    },
    // 6
    {
      description:
        "Reporte de los registros con mayor tiempo de ocupación por un rango de fechas determinado.",
      inputType: ["twoDates"],
    },
    // 7
    {
      description:
        "Reporte de los empleados totales que laboran en el hotel, clasificado por departamentos.",
      inputType: [null],
    },
    // 8
    {
      description:
        "Reporte de los empleados de mostrador con mayor bono obtenido por el registro de los  huéspedes en base a una fecha determinada.",
      inputType: [null],
    },
    // 9
    {
      description:
        "Reporte de las ventas realizadas (Registro de habitación, servicios adquiridos) en un  determinado rango de fechas.",
      inputType: ["twoDates"],
    },
    // 10
    {
      description:
        "Reporte de ganancias obtenidas por servicios adquiridos clasificados por tipo de servicio y en  base a un rango de fechas dado.",
      inputType: ["twoDates"],
    },
    // 11
    {
      description:
        "Reporte de quejas registradas en base a un rango de fechas dado y clasificado por el  departamento al que fue aplicada la queja.",
      inputType: [null],
    },
    // 12
    {
      description:
        "Reporte de número de huéspedes registrados y clasificados por el medio de registro (Internet,  Teléfono, Presencial) y muestre las ganancias obtenidas en base a rango de fechas dado.",
      inputType: ["twoDates"],
    },
    // 13
    {
      description:
        "Reporte del departamento con mejor rating de satisfacción, en base a un rango de fechas dado.",
      inputType: [null],
    },
  ];

  return (
    <div className="App">
      <nav className="nav">
        <img src={}/>
      </nav>
    </div>
  );
};

export default App;
