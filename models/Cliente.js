const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Cliente = db.define('Cliente', {
  nome: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Cliente;