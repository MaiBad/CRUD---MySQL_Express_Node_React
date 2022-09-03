const { Model, DataTypes } = require('sequelize');

const ALUMNO_TABLE = 'alumnos';

const alumnoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  edad: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class Alumno extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ALUMNO_TABLE,
      modelName: 'Alumno',
      timestamps: false,
    };
  }
}

module.exports = {
  ALUMNO_TABLE,
  alumnoSchema,
  Alumno,
};
