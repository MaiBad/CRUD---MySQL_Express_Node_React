import React, { useContext } from "react";
import AlumnoContext from "../context/alumno/AlumnoContext";
import { Card, CardContent, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";

const AlumnNumber = () => {
  const values = useContext(AlumnoContext);
  const { numAlumn } = values.state;

  return (
    <Card style={{ textAlign: "center", minWidth: "6rem" }}>
      <CardContent>
        <Person />
        <Typography>Alumnos:</Typography>
        <Typography>{numAlumn}</Typography>
      </CardContent>
    </Card>
  );
};

export default AlumnNumber;
