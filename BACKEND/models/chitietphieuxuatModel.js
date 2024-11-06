const db = require('../config/db');

const ChiTietPhieuXuat = {
    getAll: (callback) => {
        db.query('SELECT * FROM ChiTietPhieuXuat', callback);
    },
    getById: (MaPX, MaThietBi, callback) => {
        db.query('SELECT * FROM ChiTietPhieuXuat WHERE MaPX = ? AND MaThietBi = ?', [MaPX, MaThietBi], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO ChiTietPhieuXuat SET ?', data, callback);
    },
    update: (MaPX, MaThietBi, data, callback) => {
        db.query('UPDATE ChiTietPhieuXuat SET ? WHERE MaPX = ? AND MaThietBi = ?', [data, MaPX, MaThietBi], callback);
    },
    delete: (MaPX, MaThietBi, callback) => {
        db.query('DELETE FROM ChiTietPhieuXuat WHERE MaPX = ? AND MaThietBi = ?', [MaPX, MaThietBi], callback);
    }
};

module.exports = ChiTietPhieuXuat;