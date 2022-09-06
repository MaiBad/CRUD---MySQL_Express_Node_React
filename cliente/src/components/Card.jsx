import React, { useContext, useState, forwardRef } from "react";
import AlumnoContext from "../context/alumno/AlumnoContext";
import ModifyAlumn from "./ModifyAlumn";
import {
  Button,
  Collapse,
  Card as CardMui,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  colors,
  Alert as AlertMui,
  Snackbar,
} from "@mui/material";
import { Delete, Settings } from "@mui/icons-material";
import { TransitionGroup } from "react-transition-group";
import "../styles/Card.css";

const Card = () => {
  const values = useContext(AlumnoContext);

  const { alumnList } = values.state;
  const { dltAlumno } = values;

  const Alert = forwardRef(function Alert(props, ref) {
    return <AlertMui elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);

  return (
    <>
      <TransitionGroup className="cards">
        {alumnList.map((alumno) => (
          <Collapse key={alumno.id} orientation="horizontal">
            <CardMui>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: colors.blue[500] }}>
                    {alumno.nombre[0]}
                  </Avatar>
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
                  onClick={handleModal}
                >
                  Modificar
                </Button>
                <Button
                  onClick={async () => {
                    await dltAlumno(alumno.id);
                    handleClick();
                  }}
                  variant="contained"
                  endIcon={<Delete />}
                >
                  Eliminar
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Eliminado con éxito!
                  </Alert>
                </Snackbar>
              </CardActions>
            </CardMui>
          </Collapse>
        ))}
      </TransitionGroup>
      <ModifyAlumn modal={modal} handleModal={handleModal}/>
    </>
  );
};

export default Card;
