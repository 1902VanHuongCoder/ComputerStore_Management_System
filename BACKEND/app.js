const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chitietphieuxuatRoutes = require('./routes/chitietphieuxuatRoutes');
const nhanvienRoutes = require('./routes/nhanvienRoutes');

const app = express();
// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());

app.use('/api/chitietphieuxuat', chitietphieuxuatRoutes);
app.use('/api/nhanvien', nhanvienRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});