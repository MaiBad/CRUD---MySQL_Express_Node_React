import React, { useContext } from "react";
import AlumnoContext from "../context/alumno/AlumnoContext";
import Card from "./Card";

const Table = () => {
  const values = useContext(AlumnoContext);
  const { numAlumn } = values.state;
  return (
    <div>
      {numAlumn === 0
        ? <h3>No hay Alumnos</h3>
        : <Card />}
    </div>
  );
};

export default Table;
