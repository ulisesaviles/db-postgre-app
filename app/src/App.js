// React imports
import React, { useState } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// HTTP
import axios from "axios";

// Components
import { Table } from "./components/Table";

// Config
import queries from "./config/queries";

const App = () => {
  // Constants
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [selectedInputIndex, setSelectedInputIndex] = useState(0);
  const [input, setInput] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [resData, setResData] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const strings = {
    inputNames: {
      twoDates: "Fechas",
      null: "Sin entrada",
      id: "ID",
    },
  };

  // Functions
  const changeInput = (value) => {
    if (value === "") {
      setInput(0);
      return;
    }
    try {
      if (isNaN(value)) return;
      value = parseInt(value);
      if (value < 0) return;
      setInput(value);
    } catch (e) {}
  };

  const changeQuery = (newIndex) => {
    setSelectedInputIndex(0);
    setSelectedQueryIndex(newIndex);
    setLoading(false);
    setErr(false);
    setResData(null);
  };

  const formatDate = (date = new Date()) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const makeQuery = async () => {
    setErr(false);

    let route = "";
    if (
      queries[selectedQueryIndex].inputType[selectedInputIndex] === "twoDates"
    )
      route += `/${formatDate(startDate)}/${formatDate(finalDate)}`;
    else if (queries[selectedQueryIndex].inputType[selectedInputIndex] === "id")
      route += `/${input}`;

    setLoading(true);
    console.log(`http://localhost:3000/query${selectedQueryIndex + 1}${route}`);
    let response;
    try {
      response = await axios.get(
        `http://localhost:3000/query${selectedQueryIndex + 1}${route}`
      );
    } catch (e) {
      setLoading(false);
      setErr(true);
      return;
    }
    setLoading(false);

    if (response.status !== 200) {
      setErr(true);
      return;
    }

    setResData(response.data);
  };

  // Render
  return (
    <div className="app">
      {/* Nav bar */}
      <nav>
        <img
          src="https://raw.githubusercontent.com/ulisesaviles/db-postgre-app/main/app/public/logo1000.png"
          className="logo"
          alt="logo"
        />
        <h3>Consultas</h3>
        <div className="nav-queries-container">
          {queries.map((query) => {
            const index = queries.indexOf(query);
            return (
              <div
                className={`nav-query-Container ${
                  selectedQueryIndex === index
                    ? "nav-query-Container-selected"
                    : ""
                }`}
                onClick={() => changeQuery(index)}
              >
                Consulta {index + 1}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Content */}
      <div className="content-container">
        {/* Description */}
        <div className="description-container">
          <h1 style={{ fontSize: 45 }}>Consulta {selectedQueryIndex + 1}</h1>
          <h3>Descripción</h3>
          {queries[selectedQueryIndex].description}
        </div>

        {/* Input section */}
        <div className="content-subContainer border-bottom">
          <h1>Input</h1>
          <div className="ipnutsContainer">
            {queries[selectedQueryIndex].inputType.map((type) => {
              const inputIndex =
                queries[selectedQueryIndex].inputType.indexOf(type);
              return (
                <div
                  className={
                    selectedInputIndex === inputIndex ? "inputName" : "margin"
                  }
                  onClick={() => setSelectedInputIndex(inputIndex)}
                >
                  {strings.inputNames[type]}
                </div>
              );
            })}
          </div>
          {queries[selectedQueryIndex].inputType[selectedInputIndex] ===
          null ? (
            <p className="noInput">(Esta consulta no requiere input)</p>
          ) : queries[selectedQueryIndex].inputType[selectedInputIndex] ===
            "twoDates" ? (
            <div className="datesContainer">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

              <DatePicker
                selected={finalDate}
                onChange={(date) => setFinalDate(date)}
              />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <input
                onChange={(e) => changeInput(e.target.value)}
                value={input}
              />
              <p className="noInput" style={{ fontSize: 14 }}>
                (Recuerda ingresar enteros positivos)
              </p>
            </div>
          )}
          <div className="nav-query-Container-selected btn" onClick={makeQuery}>
            Hacer consulta
          </div>
        </div>

        {/* Response section */}
        <div className="content-subContainer">
          <h1>Output</h1>
          {loading ? (
            <p className="noInput" style={{ margin: 20 }}>
              Cargando...
            </p>
          ) : err ? (
            <p className="noInput" style={{ margin: 20 }}>
              Error. Revisa tu conexión.
            </p>
          ) : resData != null ? (
            <Table data={resData} />
          ) : (
            <p className="noInput" style={{ margin: 20 }}>
              (Ingresa la información solicitada y preciona "Hacer consulta")
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
