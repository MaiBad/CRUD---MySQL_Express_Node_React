import React, { useContext } from "react";
import AlumnoContext from "../context/alumno/AlumnoContext";
import CardAlumn from "./CardAlumn";
import "../styles/CardsContainer.css";

const CardsContainer = () => {
  const values = useContext(AlumnoContext);
  const { alumnList } = values.state;

  return (
    <div className="cards">
      {alumnList.map((alumno) => (
        <CardAlumn alumno={alumno} key={alumno.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
