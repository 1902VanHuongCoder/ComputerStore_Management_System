const express = require('express');
const router = express.Router();
const chitietphieuxuatController = require('../controllers/chitietphieuxuatController');

router.get('/', chitietphieuxuatController.getAll);
router.get('/:MaPX/:MaThietBi', chitietphieuxuatController.getById);
router.post('/', chitietphieuxuatController.create);
router.put('/:MaPX/:MaThietBi', chitietphieuxuatController.update);
router.delete('/:MaPX/:MaThietBi', chitietphieuxuatController.delete);

module.exports = router;