const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servico.controller');

router.post('/', servicoController.create);
router.get('/', servicoController.findAll);
router.get('/:id', servicoController.findById);
router.put('/:id', servicoController.update);
router.delete('/:id', servicoController.remove);

module.exports = router;