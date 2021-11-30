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
import gets from "./config/gets";
import storedProcedures from "./config/storedProcedures";
import posts from "./config/posts";

const App = () => {
  // Constants
  const [selectedNavIndex, setSelectedNavIndex] = useState(0);
  const [selectedInputIndex, setSelectedInputIndex] = useState(0);
  const [input, setInput] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [resData, setResData] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("gets");
  const [activeObj, setActiveObj] = useState({ ...gets[0], type: "get" });
  const [inputs, setInputs] = useState([]);
  const [inputErr, setInputErr] = useState(false);

  const strings = {
    inputNames: {
      twoDates: "Fechas",
      null: "Sin entrada",
      id: "ID",
    },
    booleans: {
      true: "Verdadero",
      false: "Falso",
    },
  };

  // Functions
  const buildRoute = () => {
    try {
      let route = activeObj.route;
      for (let i = 0; i < activeObj.inputs.length; i++) {
        const input = activeObj.inputs[i];
        if (inputs[i] == null) return;
        const subRoute = parseInput(inputs[i], input.type);
        if (!subRoute) return;
        route += `/${subRoute}`;
      }
      return route;
    } catch (e) {}
  };

  const changeInput = (value) => {
    if (value === "") {
      setInput(1);
      return;
    }
    try {
      if (isNaN(value)) return;
      value = parseInt(value);
      if (value < 1) return;
      setInput(value);
    } catch (e) {}
  };

  const changeInputs = (value, index) => {
    if (activeObj.inputs[index].type === "int") setIntInput(value, index);
    else if (activeObj.inputs[index].type === "double")
      setDoubleInput(value, index);
    else if (activeObj.inputs[index].type === "date")
      setDateInput(value, index);
    else if (activeObj.inputs[index].type === "hour")
      setDateInput(value, index);
    else if (activeObj.inputs[index].type === "boolean")
      setBooleanInput(value, index);
    else setStringInput(value, index);
  };

  const changeObj = (newIndex, section) => {
    setInputs([]);
    setActiveSection(section);
    setSelectedInputIndex(0);
    setSelectedNavIndex(newIndex);
    setLoading(false);
    setErr(false);
    setResData(null);
    setInputErr(false);

    if (section === "gets") setActiveObj({ ...gets[newIndex], type: "get" });
    if (section === "posts") setActiveObj({ ...posts[newIndex], type: "post" });
    if (section === "storedProcedures")
      setActiveObj({ ...storedProcedures[newIndex], type: "storedProcedure" });
    if (section === "queries")
      setActiveObj({ ...queries[newIndex], type: "query" });
  };

  const formatDate = (date = new Date()) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const formatHour = (date = new Date()) => {
    let hours = date.getHours().toString();
    hours = hours.length === 1 ? `0${hours}` : hours;
    let minutes = date.getMinutes().toString();
    minutes = minutes.length === 1 ? `0${minutes}` : minutes;
    let seconds = date.getSeconds().toString();
    seconds = seconds.length === 1 ? `0${seconds}` : seconds;
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleBtn = () => {
    if (activeObj.type === "query") makeQuery();
    if (["get", "storedProcedure"].includes(activeObj.type)) makeGet();
    if (activeObj.type === "post") makePost();
  };

  const makeGet = async () => {
    setErr(false);

    const route = buildRoute();
    console.log(route);
    if (!route) {
      setInputErr(true);
      return;
    }
    setInputErr(false);

    setLoading(true);
    let response;
    try {
      response = await axios.get(route);
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

  const makePost = async () => {
    setErr(false);

    const route = buildRoute();
    console.log(route);
    if (!route) {
      setInputErr(true);
      return;
    }
    setInputErr(false);

    setLoading(true);
    let response;
    try {
      response = await axios.post(route);
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

  const makeQuery = async () => {
    setErr(false);

    let route = "";
    if (queries[selectedNavIndex].inputType[selectedInputIndex] === "twoDates")
      route += `/${formatDate(startDate)}/${formatDate(finalDate)}`;
    else if (queries[selectedNavIndex].inputType[selectedInputIndex] === "id")
      route += `/${input}`;

    setLoading(true);
    console.log(`http://localhost:3000/query${selectedNavIndex + 1}${route}`);
    let response;
    try {
      response = await axios.get(
        `http://localhost:3000/query${selectedNavIndex + 1}${route}`
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

  const parseInput = (value, type) => {
    if (type === "hour") return formatHour(value);
    if (type === "date") return formatDate(value);
    if (type === "int")
      return value !== "" && !isNaN(value) ? parseInt(value) : null;
    if (type === "double")
      return value !== "" && !isNaN(value) ? parseFloat(value) : null;
    return value;
  };

  const setBooleanInput = (value, index) => {
    let temp = [...inputs];
    temp[index] = value;
    setInputs(temp);
  };

  const setDateInput = (value, index) => {
    let temp = [...inputs];
    temp[index] = value;
    setInputs(temp);
  };

  const setDoubleInput = (value, index) => {
    let temp = [...inputs];
    if (value === "") {
      temp[index] = "";
      setInputs(temp);
      return;
    }

    try {
      // if (typeof value === "number") value = value.toString();
      if (value.charAt(value.length - 1) === ".") value = value + "0";
      if (isNaN(value)) return;
      parseFloat(value);
      if (value < 0) return;
      temp[index] = value;
      setInputs(temp);
    } catch (e) {}
  };

  const setIntInput = (value, index) => {
    let temp = [...inputs];
    if (value === "") {
      temp[index] = "";
      setInputs(temp);
      return;
    }
    try {
      if (isNaN(value)) return;
      value = parseInt(value);
      if (value <= 0) return;
      temp[index] = value;
      setInputs(temp);
    } catch (e) {}
  };

  const setStringInput = (value, index) => {
    const limit = activeObj.inputs[index].type.split("_")[1];
    let temp = [...inputs];
    temp[index] = value.substring(0, limit);
    setInputs(temp);
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
        <div className="nav-items-container">
          <div className="white-gradient">.</div>
          {/* Gets */}
          <h3>Tablas</h3>
          <div className="nav-queries-container">
            {gets.map((getItem) => {
              const index = gets.indexOf(getItem);
              return (
                <div
                  className={`nav-query-Container ${
                    selectedNavIndex === index && activeSection === "gets"
                      ? "nav-query-Container-selected"
                      : ""
                  }`}
                  onClick={() => changeObj(index, "gets")}
                >
                  {getItem.name}
                </div>
              );
            })}
          </div>

          {/* Posts */}
          <h3>Inserciones</h3>
          <div className="nav-queries-container">
            {posts.map((postItem) => {
              const index = posts.indexOf(postItem);
              return (
                <div
                  className={`nav-query-Container ${
                    selectedNavIndex === index && activeSection === "posts"
                      ? "nav-query-Container-selected"
                      : ""
                  }`}
                  onClick={() => changeObj(index, "posts")}
                >
                  {postItem.name}
                </div>
              );
            })}
          </div>

          {/* Queries */}
          <h3>Consultas</h3>
          <div className="nav-queries-container">
            {queries.map((query) => {
              const index = queries.indexOf(query);
              return (
                <div
                  className={`nav-query-Container ${
                    selectedNavIndex === index && activeSection === "queries"
                      ? "nav-query-Container-selected"
                      : ""
                  }`}
                  onClick={() => changeObj(index, "queries")}
                >
                  Consulta {index + 1}
                </div>
              );
            })}
          </div>

          {/* Stored procedures */}
          <h3>Stored procedures</h3>
          <div className="nav-queries-container">
            {storedProcedures.map((storedProcedure) => {
              const index = storedProcedures.indexOf(storedProcedure);
              return (
                <div
                  className={`nav-query-Container ${
                    selectedNavIndex === index &&
                    activeSection === "storedProcedures"
                      ? "nav-query-Container-selected"
                      : ""
                  }`}
                  onClick={() => changeObj(index, "storedProcedures")}
                >
                  {storedProcedure.name}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="content-container">
        {/* Description */}
        <div className="description-container">
          <h1 style={{ fontSize: 45 }}>{activeObj.name}</h1>
          <h3 style={{ left: 0 }}>Descripción</h3>
          {activeObj.description}
        </div>

        {/* Input section */}
        <div className="content-subContainer border-bottom">
          <h1>Input</h1>
          {activeObj.type === "query" ? (
            <>
              <div className="ipnutsContainer">
                {queries[selectedNavIndex].inputType.map((type) => {
                  const inputIndex =
                    queries[selectedNavIndex].inputType.indexOf(type);
                  return (
                    <div
                      className={
                        selectedInputIndex === inputIndex
                          ? "inputName"
                          : "margin"
                      }
                      onClick={() => setSelectedInputIndex(inputIndex)}
                    >
                      {strings.inputNames[type]}
                    </div>
                  );
                })}
              </div>
              {queries[selectedNavIndex].inputType[selectedInputIndex] ===
              null ? (
                <p className="noInput">(Esta consulta no requiere input)</p>
              ) : queries[selectedNavIndex].inputType[selectedInputIndex] ===
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
            </>
          ) : (
            // New input format
            <>
              {activeObj.inputs.length === 0 ? (
                <p className="noInput">(Esta consulta no requiere input)</p>
              ) : (
                activeObj.inputs.map((input) => {
                  const inputIndex = activeObj.inputs.indexOf(input);
                  return (
                    <div className="inputContainer">
                      <p className="inputName_">{input.name}</p>
                      {input.type === "int" ? (
                        <>
                          <input
                            onChange={(e) =>
                              changeInputs(e.target.value, inputIndex)
                            }
                            value={inputs[inputIndex]}
                          />
                          <p className="noInput" style={{ fontSize: 14 }}>
                            (Recuerda ingresar enteros positivos)
                          </p>
                        </>
                      ) : input.type === "double" ? (
                        <>
                          <input
                            onChange={(e) =>
                              changeInputs(e.target.value, inputIndex)
                            }
                            value={inputs[inputIndex]}
                          />
                          <p className="noInput" style={{ fontSize: 14 }}>
                            (Recuerda ingresar números positivos)
                          </p>
                        </>
                      ) : input.type === "boolean" ? (
                        <>
                          <div className="ipnutsContainer">
                            {[false, true].map((bool) => {
                              return (
                                <div
                                  className={
                                    inputs[inputIndex] === bool
                                      ? "inputName"
                                      : "margin"
                                  }
                                  onClick={() => changeInputs(bool, inputIndex)}
                                >
                                  {strings.booleans[JSON.stringify(bool)]}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      ) : input.type === "date" ? (
                        <>
                          <DatePicker
                            selected={inputs[inputIndex]}
                            onChange={(date) => changeInputs(date, inputIndex)}
                          />
                        </>
                      ) : input.type === "hour" ? (
                        <>
                          <DatePicker
                            selected={inputs[inputIndex]}
                            onChange={(date) => changeInputs(date, inputIndex)}
                            showTimeSelect
                            showTimeSelectOnly
                          />
                        </>
                      ) : (
                        <>
                          <input
                            onChange={(e) =>
                              changeInputs(e.target.value, inputIndex)
                            }
                            value={inputs[inputIndex]}
                            style={{ width: "200%" }}
                          />
                          <p className="noInput" style={{ fontSize: 14 }}>
                            (Recuerda ingresar hasta{" "}
                            {activeObj.inputs[inputIndex].type.split("_")[1]}{" "}
                            caracteres)
                          </p>
                        </>
                      )}
                    </div>
                  );
                })
              )}
            </>
          )}
          <div className="nav-query-Container-selected btn" onClick={handleBtn}>
            Hacer consulta
          </div>
          {inputErr ? <p className="err">Ingresa información válida</p> : null}
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
          ) : resData != null && typeof resData === "object" ? (
            <Table data={resData} />
          ) : resData != null && typeof resData === "string" ? (
            <p className="noInput" style={{ margin: 20 }}>
              ¡Hecho!
            </p>
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
