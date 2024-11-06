const NhanVien = require('../models/nhanvienModel');

exports.create = (req, res) => {
    console.log(req.body);

    NhanVien.create(req.body, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ message: 'Nhân viên đã được tạo thành công', data: results });
        }
    });
};