const express = require('express');
const router = express.Router();
const ordemController = require('../controllers/ordem.controller');

router.post('/', ordemController.create);
router.get('/', ordemController.findAll);
router.get('/:id', ordemController.findById);
router.put('/:id', ordemController.update);
router.delete('/:id', ordemController.remove);

module.exports = router;