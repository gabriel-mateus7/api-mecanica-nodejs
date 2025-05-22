const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculo.controller');

router.post('/', veiculoController.create);
router.get('/', veiculoController.findAll);
router.get('/:id', veiculoController.findById);
router.put('/:id', veiculoController.update);
router.delete('/:id', veiculoController.remove);

module.exports = router;