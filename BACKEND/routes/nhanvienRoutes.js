const express = require('express');
const router = express.Router();
const nhanvienController = require('../controllers/nhanvienController');

router.post('/', nhanvienController.create); // Create a new NhanVien

module.exports = router;