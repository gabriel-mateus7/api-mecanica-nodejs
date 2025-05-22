const Cliente = require('../models/Cliente');

exports.create = async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.status(201).json(cliente);
};

exports.findAll = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};

exports.findById = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (cliente) res.json(cliente);
  else res.status(404).json({ erro: 'Cliente não encontrado' });
};

exports.update = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (cliente) {
    await cliente.update(req.body);
    res.json(cliente);
  } else res.status(404).json({ erro: 'Cliente não encontrado' });
};

exports.remove = async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (cliente) {
    await cliente.destroy();
    res.json({ msg: 'Cliente removido com sucesso' });
  } else res.status(404).json({ erro: 'Cliente não encontrado' });
};