const express = require('express');
const bodyParser = require('body-parser');
const chitietphieuxuatRoutes = require('./routes/chitietphieuxuatRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/chitietphieuxuat', chitietphieuxuatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});