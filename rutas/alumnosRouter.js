const express = require('express');
const AlumnosService = require('../services/alumnoService');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  crearAlumnoSchema,
  modificarAlumnoSchema,
  obtenerAlumnoSchema,
} = require('../schemas/alumnoSchema');

const router = express.Router();
const servicio = new AlumnosService();

router.get('/', async (req, res, next) => {
  try {
    const alumnos = await servicio.getAlumnos();
    res.json(alumnos);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(obtenerAlumnoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const alumno = await servicio.getAlumno(id);
      res.json(alumno);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(crearAlumnoSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const nuevoAlumno = await servicio.createAlumno(data);
      res.status(201).json(nuevoAlumno);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(obtenerAlumnoSchema, 'params'),
  validatorHandler(modificarAlumnoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cambios = req.body;
      const alumnoModificado = await servicio.modificarAlumno(id, cambios);
      res.json(alumnoModificado);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(obtenerAlumnoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await servicio.removerAlumno(id);
      res.json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
