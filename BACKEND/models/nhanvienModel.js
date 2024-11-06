const db = require('../config/db');

const NhanVien = {
    create: (data, callback) => {
        const sql = 'INSERT INTO NhanVien (HoTen, NgaySinh, SoDienThoai) VALUES (?, ?, ?)';
        db.query(sql, [data.HoTen, data.NgaySinh, data.SoDienThoai], callback);
    }
};

module.exports = NhanVien;