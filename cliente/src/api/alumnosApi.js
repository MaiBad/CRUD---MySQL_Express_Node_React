import axios from 'axios';

export const obtenerAlumnos = async () =>
  await axios.get('http://localhost:3000/api/v1/alumnos');

export const obtenerAlumno = async (id) =>
  await axios.get(`http://localhost:3000/api/v1/alumnos/${id}`);

export const crearAlumno = async (data) =>
  await axios.post('http://localhost:3000/api/v1/alumnos', data);

export const eliminarAlumno = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/alumnos/${id}`);
