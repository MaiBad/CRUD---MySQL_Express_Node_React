import React, { useContext } from "react";
import * as Yup from "yup";
import { Formik, Form as Formulario } from "formik";
import { Modal, TextField, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Send } from "@mui/icons-material";
import AlumnoContext from "../context/alumno/AlumnoContext";
import "../styles/Form.css";

const Form = () => {
  const { open, create, handleClose, values, addAlumno, updAlumno, id } =
    useContext(AlumnoContext);

  //Validación
  const formSchema = Yup.object().shape({
    nombre: Yup.string()
      .max(50, "Demasiado Largo!")
      .required("Nombre obligatorio!"),
    apellido: Yup.string()
      .max(50, "Demasiado Largo!")
      .required("Apellido obligatorio!"),
    edad: Yup.number()
      .integer("Edad inválida")
      .positive("Edad inválida")
      .required("Edad obligatoria!"),
    email: Yup.string()
      .email("Correo inválido")
      .required("Correo obligatorio!"),
  });

  //Estilo del modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #000",
    boxShadow: 24,
  };

  //Valores iniciales del formulario
  const initialValues = {
    nombre: values.nombre,
    apellido: values.apellido,
    edad: values.edad,
    email: values.email,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {
            if (create) {
              addAlumno(values);
            } else {
              updAlumno(id, values);
            }
            actions.setSubmitting(false);
            handleClose();
          }}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleSubmit,
            handleClick,
            isSubmitting,
          }) => (
            <Formulario onSubmit={handleSubmit} className="form">
              <TextField
                error={errors.nombre && touched.nombre && true}
                name="nombre"
                autoComplete="off"
                variant="outlined"
                label="Nombre"
                onChange={handleChange}
                value={values.nombre}
                helperText={errors.nombre && touched.nombre && errors.nombre}
              />
              <TextField
                error={errors.apellido && touched.apellido && true}
                name="apellido"
                autoComplete="off"
                variant="outlined"
                label="Apellido"
                onChange={handleChange}
                value={values.apellido}
                helperText={
                  errors.apellido && touched.apellido && errors.apellido
                }
              />
              <TextField
                error={errors.edad && touched.edad && true}
                name="edad"
                type="number"
                autoComplete="off"
                variant="outlined"
                label="Edad"
                onChange={handleChange}
                value={values.edad}
                helperText={errors.edad && touched.edad && errors.edad}
              />
              <TextField
                error={errors.email && touched.email && true}
                name="email"
                type="email"
                autoComplete="off"
                variant="outlined"
                label="Correo"
                onChange={handleChange}
                value={values.email}
                helperText={errors.email && touched.email && errors.email}
              />
              <LoadingButton
                type="submit"
                onClick={handleClick}
                endIcon={<Send />}
                loading={isSubmitting}
                loadingPosition="end"
                variant="contained"
              >
                {create ? "Enviar" : "Modificar"}
              </LoadingButton>
            </Formulario>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default Form;
