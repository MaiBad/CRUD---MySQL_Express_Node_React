const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();
const apellido = Joi.string();
const edad = Joi.number().integer();
const email = Joi.string().email();

const crearAlumnoSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  edad: edad.required(),
  email: email.required(),
});

const modificarAlumnoSchema = Joi.object({
  nombre: nombre,
  apellido: apellido,
  edad: edad,
  email: email,
});

const obtenerAlumnoSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  crearAlumnoSchema,
  modificarAlumnoSchema,
  obtenerAlumnoSchema,
};
