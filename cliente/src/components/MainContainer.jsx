import React, { useState, useEffect } from "react";
import AlumnNumber from "./AlumnNumber";
import CardsContainer from "./CardsContainer";
import Navbar from "./Navbar";
import Form from "./Form";
import AlumnoContext from "../context/alumno/AlumnoContext";
import {
  obtenerAlumnos,
  eliminarAlumno,
  crearAlumno,
  modificarAlumno,
} from "../api/alumnosApi";
import "../styles/MainContainer.css";

const MainContainer = () => {
  //Estado de alumnos
  const [state, setState] = useState({
    alumnList: [],
    numAlumn: 0,
  });

  //Obtención de la lista de alumnos
  async function obAlumnos() {
    const { data } = await obtenerAlumnos();
    setState({
      alumnList: data,
      numAlumn: data.length,
    });
  }

  //Elimina un alumno
  async function dltAlumno(id) {
    await eliminarAlumno(id);
    let arrAlumn = state.alumnList.filter((alumno) => alumno.id !== id);
    setState({
      alumnList: arrAlumn,
      numAlumn: arrAlumn.length,
    });
  }

  //Agregar un alumno
  async function addAlumno(alumno) {
    let { data } = await crearAlumno(alumno);
    let arrAlumn = [...state.alumnList].concat([data]);
    setState({
      alumnList: arrAlumn,
      numAlumn: arrAlumn.length,
    });
  }

  //Modificar un alumno
  async function updAlumno(id, data) {
    await modificarAlumno(id, data);
    obAlumnos();
  }

  //Llamado al metodo obAlumnos() cuando se renderice la app
  useEffect(() => {
    obAlumnos();
  }, []);

  //Estado del Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Estados del Formulario
  const [create, setCreate] = useState(false);
  const handleCreate = () => setCreate(true);
  const handleModify = () => setCreate(false);
  const [id, setId] = useState();
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
  });

  return (
    <AlumnoContext.Provider
      value={{
        state,
        addAlumno,
        dltAlumno,
        updAlumno,
        create,
        open,
        handleOpen,
        handleClose,
        handleCreate,
        handleModify,
        values,
        setValues,
        id,
        setId,
      }}
    >
      <Navbar />
      <div className="container">
        <section className="cards-container">
          <CardsContainer />
        </section>
        <section className="alumn-container">
          <AlumnNumber />
        </section>
      </div>
      <Form />
    </AlumnoContext.Provider>
  );
};

export default MainContainer;
