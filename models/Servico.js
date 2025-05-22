const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Servico = db.define('Servico', {
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

module.exports = Servico;