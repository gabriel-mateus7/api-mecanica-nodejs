const Veiculo = require('../models/Veiculo');

exports.create = async (req, res) => {
  const veiculo = await Veiculo.create(req.body);
  res.status(201).json(veiculo);
};

exports.findAll = async (req, res) => {
  const veiculos = await Veiculo.findAll();
  res.json(veiculos);
};

exports.findById = async (req, res) => {
  const veiculo = await Veiculo.findByPk(req.params.id);
  if (veiculo) res.json(veiculo);
  else res.status(404).json({ erro: 'Veículo não encontrado' });
};

exports.update = async (req, res) => {
  const veiculo = await Veiculo.findByPk(req.params.id);
  if (veiculo) {
    await veiculo.update(req.body);
    res.json(veiculo);
  } else res.status(404).json({ erro: 'Veículo não encontrado' });
};

exports.remove = async (req, res) => {
  const veiculo = await Veiculo.findByPk(req.params.id);
  if (veiculo) {
    await veiculo.destroy();
    res.json({ msg: 'Veículo removido com sucesso' });
  } else res.status(404).json({ erro: 'Veículo não encontrado' });
};