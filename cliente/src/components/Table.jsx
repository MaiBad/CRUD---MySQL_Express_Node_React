import React, { useContext } from "react";
import AlumnoContext from "../context/alumno/AlumnoContext";
import Card from "./Card";
import { Card as CardMui, CardContent, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";
import "../styles/Table.css";

const Table = () => {
  const values = useContext(AlumnoContext);
  const { numAlumn } = values.state;
  return (
    <section className="alumnos">
      {numAlumn === 0 ? <h3>No hay Alumnos</h3> : <Card />}
      <div>
        <CardMui className="numero-alumnos">
          <CardContent>
            <Typography>
              <Person />
              <br />
              Alumnos: {numAlumn}
            </Typography>
          </CardContent>
        </CardMui>
      </div>
    </section>
  );
};

export default Table;
