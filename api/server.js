const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors()); // Tüm origin'lere izin verir
server.use(express.json()); // JSON gövdeleri parse eder

server.get('/deneme', (req, res) => {
    console.log('Deneme GET isteği geldi');
    res.status(200).json({ message: 'Deneme' });
});

module.exports = server;
