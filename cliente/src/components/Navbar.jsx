import React, { useContext } from "react";
import "../styles/Navbar.css";
import { Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import AlumnoContext from "../context/alumno/AlumnoContext";

const Navbar = () => {
  const { handleCreate, handleOpen, setValues } = useContext(AlumnoContext);
  return (
    <nav className="navbar">
      <Typography variant="h1" style={{ fontSize: "2.5rem" }}>
        CRUD
      </Typography>
      <Button
        variant="contained"
        endIcon={<Add />}
        onClick={() => {
          handleCreate();
          handleOpen();
          setValues({
            nombre: "",
            apellido: "",
            edad: "",
            email: "",
          });
        }}
      >
        Agregar Alumno
      </Button>
    </nav>
  );
};

export default Navbar;
