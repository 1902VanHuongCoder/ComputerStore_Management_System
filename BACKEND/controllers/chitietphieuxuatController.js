const ChiTietPhieuXuat = require('../models/chitietphieuxuatModel');

exports.getAll = (req, res) => {
    ChiTietPhieuXuat.getAll((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

exports.getById = (req, res) => {
    ChiTietPhieuXuat.getById(req.params.MaPX, req.params.MaThietBi, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

exports.create = (req, res) => {
    ChiTietPhieuXuat.create(req.body, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

exports.update = (req, res) => {
    ChiTietPhieuXuat.update(req.params.MaPX, req.params.MaThietBi, req.body, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

exports.delete = (req, res) => {
    ChiTietPhieuXuat.delete(req.params.MaPX, req.params.MaThietBi, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};