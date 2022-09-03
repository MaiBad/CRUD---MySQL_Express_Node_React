const boom = require('@hapi/boom');
const { reset } = require('nodemon');
const { models } = require('../libs/sequelize');

class AlumnoService {
  constructor() {}

  async getAlumnos() {
    const alumnos = await models.Alumno.findAll();
    return alumnos;
  }

  async getAlumno(id) {
    const alumno = await models.Alumno.findByPk(id);
    if (!alumno) {
      throw boom.notFound('Usuario no encontrado');
    }
    return alumno;
  }

  async createAlumno(data) {
    const nuevoAlumno = await models.Alumno.create(data);
    return nuevoAlumno;
  }

  async modificarAlumno(id, cambios) {
    const alumno = await this.getAlumno(id);
    const alumnoModificado = await alumno.update(cambios);
    return alumnoModificado;
  }

  async removerAlumno(id) {
    const alumno = await this.getAlumno(id);
    await alumno.destroy();
    return { id };
  }
}

module.exports = AlumnoService;
