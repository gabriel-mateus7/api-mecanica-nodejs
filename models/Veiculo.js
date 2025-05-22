const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Cliente = require('./Cliente');

const Veiculo = db.define('Veiculo', {
  modelo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Veiculo.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Cliente.hasMany(Veiculo, { foreignKey: 'cliente_id' });

module.exports = Veiculo;