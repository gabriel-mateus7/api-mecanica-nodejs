const Servico = require('../models/Servico');

exports.create = async (req, res) => {
  const servico = await Servico.create(req.body);
  res.status(201).json(servico);
};

exports.findAll = async (req, res) => {
  const servicos = await Servico.findAll();
  res.json(servicos);
};

exports.findById = async (req, res) => {
  const servico = await Servico.findByPk(req.params.id);
  if (servico) res.json(servico);
  else res.status(404).json({ erro: 'Serviço não encontrado' });
};

exports.update = async (req, res) => {
  const servico = await Servico.findByPk(req.params.id);
  if (servico) {
    await servico.update(req.body);
    res.json(servico);
  } else res.status(404).json({ erro: 'Serviço não encontrado' });
};

exports.remove = async (req, res) => {
  const servico = await Servico.findByPk(req.params.id);
  if (servico) {
    await servico.destroy();
    res.json({ msg: 'Serviço removido com sucesso' });
  } else res.status(404).json({ erro: 'Serviço não encontrado' });
};