const { Alumno, alumnoSchema } = require('./alumnoModel');

function setupModels(sequelize) {
  Alumno.init(alumnoSchema, Alumno.config(sequelize));
}

module.exports = setupModels;
