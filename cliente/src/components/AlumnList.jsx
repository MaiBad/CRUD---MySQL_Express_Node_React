import React, { useEffect, useState } from "react";
import Table from "./Table";
import FormAlumn from "./FormAlumn";
import AlumnoContext from "../context/alumno/AlumnoContext";
import { eliminarAlumno, obtenerAlumnos, crearAlumno } from "../api/alumnosApi";
import '../styles/AlumnList.css'

export const AlumnList = () => {
  const initialState = {
    alumnList: [],
    numAlumn: 0,
  };

  const [state, setState] = useState(initialState);

  async function obAlumnos() {
    const { data } = await obtenerAlumnos();
    setState({
      alumnList: data,
      numAlumn: data.length,
    });
  }

  async function dltAlumno(id) {
    await eliminarAlumno(id);
    let arrAlumn = state.alumnList.filter((alumno) => alumno.id !== id);
    setState({
      alumnList: arrAlumn,
      numAlumn: arrAlumn.length,
    });
  }

  async function addAlumno(alumno) {
    let { data } = await crearAlumno(alumno);
    let arrAlumn = [...state.alumnList].concat([data]);
    setState({
      alumnList: arrAlumn,
      numAlumn: arrAlumn.length,
    });
  }

  useEffect(() => {
    obAlumnos();
  }, []);

  return (
    <div className="container">
      <AlumnoContext.Provider value={{ state, dltAlumno, addAlumno }} >
        <Table />
        <FormAlumn />
      </AlumnoContext.Provider>
    </div>
  );
};
