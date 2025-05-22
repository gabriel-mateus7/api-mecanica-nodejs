const express = require('express');
const router = express.Router();
const mecanicoController = require('../controllers/mecanico.controller');

router.post('/', mecanicoController.create);
router.get('/', mecanicoController.findAll);
router.get('/:id', mecanicoController.findById);
router.put('/:id', mecanicoController.update);
router.delete('/:id', mecanicoController.remove);

module.exports = router;