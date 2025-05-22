const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Veiculo = require('./Veiculo');
const Servico = require('./Servico');

const OrdemServico = db.define('OrdemServico', {
  veiculo_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  servico_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_abertura: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  data_conclusao: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
});

OrdemServico.belongsTo(Veiculo, { foreignKey: 'veiculo_id' });
OrdemServico.belongsTo(Servico, { foreignKey: 'servico_id' });

module.exports = OrdemServico;