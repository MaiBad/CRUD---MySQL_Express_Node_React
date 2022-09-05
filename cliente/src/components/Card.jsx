import React, { useContext } from "react";
import AlumnoContext from "../context/alumno/AlumnoContext";
import "../styles/Card.css";

const Card = () => {
  const values = useContext(AlumnoContext);

  const { alumnList } = values.state;
  const { dltAlumno } = values;

  return (
    <>
      {alumnList.map((alumno) => {
        return (
          <div key={alumno.id}>
            <p>{alumno.nombre}</p>
            <p>{alumno.apellido}</p>
            <p>{alumno.edad}</p>
            <p>{alumno.email}</p>
            <button>Modificar</button>
            <button
              onClick={async () => {
                await dltAlumno(alumno.id);
              }}
            >
              Eliminar
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Card;
