const Mecanico = require('../models/Mecanico');

exports.create = async (req, res) => {
  const mecanico = await Mecanico.create(req.body);
  res.status(201).json(mecanico);
};

exports.findAll = async (req, res) => {
  const mecanicos = await Mecanico.findAll();
  res.json(mecanicos);
};

exports.findById = async (req, res) => {
  const mecanico = await Mecanico.findByPk(req.params.id);
  if (mecanico) res.json(mecanico);
  else res.status(404).json({ erro: 'Mecânico não encontrado' });
};

exports.update = async (req, res) => {
  const mecanico = await Mecanico.findByPk(req.params.id);
  if (mecanico) {
    await mecanico.update(req.body);
    res.json(mecanico);
  } else res.status(404).json({ erro: 'Mecânico não encontrado' });
};

exports.remove = async (req, res) => {
  const mecanico = await Mecanico.findByPk(req.params.id);
  if (mecanico) {
    await mecanico.destroy();
    res.json({ msg: 'Mecânico removido com sucesso' });
  } else res.status(404).json({ erro: 'Mecânico não encontrado' });
};