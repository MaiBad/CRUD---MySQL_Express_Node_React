import React, { useContext } from "react";
import {
  Button,
  Card as CardMui,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  colors,
} from "@mui/material";
import { Delete, Settings } from "@mui/icons-material";
import AlumnoContext from "../context/alumno/AlumnoContext";

const CardAlumn = ({ alumno }) => {
  const { dltAlumno, handleModify, handleOpen, setValues, setId } =
    useContext(AlumnoContext);

  return (
    <CardMui style={{ minWidth: "16.5rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: colors.blue[500] }}>{alumno.nombre[0]}</Avatar>
        }
        title={`${alumno.nombre} ${alumno.apellido}`}
        subheader={`ID: ${alumno.id}`}
      />
      <CardContent>
        <Typography>
          Edad: {alumno.edad}
          <br />
          Email: {alumno.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          endIcon={<Settings />}
          onClick={() => {
            handleModify();
            handleOpen();
            setValues({
              nombre: alumno.nombre,
              apellido: alumno.apellido,
              edad: alumno.edad,
              email: alumno.email,
            });
            setId(alumno.id);
          }}
        >
          Modificar
        </Button>
        <Button
          variant="contained"
          endIcon={<Delete />}
          onClick={() => {
            dltAlumno(alumno.id);
          }}
        >
          Eliminar
        </Button>
      </CardActions>
    </CardMui>
  );
};

export default CardAlumn;
