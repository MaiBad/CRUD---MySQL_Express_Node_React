import React, { useContext } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import AlumnoContext from "../context/alumno/AlumnoContext";
import { TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import '../styles/FormAlumn.css'

const FormAlumn = () => {
  const values = useContext(AlumnoContext);
  const { addAlumno } = values;

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

  const initialValues = {
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={async (values, actions) => {
          await addAlumno(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleSubmit,
          values,
          isSubmitting,
          handleClick,
        }) => (
          <Form onSubmit={handleSubmit} className="form">
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
              Enviar
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormAlumn;
