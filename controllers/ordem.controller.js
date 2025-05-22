const OrdemServico = require('../models/OrdemServico');

exports.create = async (req, res) => {
  const ordem = await OrdemServico.create(req.body);
  res.status(201).json(ordem);
};

exports.findAll = async (req, res) => {
  const ordens = await OrdemServico.findAll();
  res.json(ordens);
};

exports.findById = async (req, res) => {
  const ordem = await OrdemServico.findByPk(req.params.id);
  if (ordem) res.json(ordem);
  else res.status(404).json({ erro: 'Ordem de serviço não encontrada' });
};

exports.update = async (req, res) => {
  const ordem = await OrdemServico.findByPk(req.params.id);
  if (ordem) {
    await ordem.update(req.body);
    res.json(ordem);
  } else res.status(404).json({ erro: 'Ordem de serviço não encontrada' });
};

exports.remove = async (req, res) => {
  const ordem = await OrdemServico.findByPk(req.params.id);
  if (ordem) {
    await ordem.destroy();
    res.json({ msg: 'Ordem de serviço removida com sucesso' });
  } else res.status(404).json({ erro: 'Ordem de serviço não encontrada' });
};