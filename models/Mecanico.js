const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Mecanico = db.define('Mecanico', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidade: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Mecanico;