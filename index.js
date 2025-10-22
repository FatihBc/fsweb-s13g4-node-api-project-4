require('dotenv').config(); // .env dosyasını yükler
const server = require('./api/server.js'); // Express uygulamasını içeri alır

const port = process.env.PORT || 3000; // .env'den PORT al, yoksa 3000 kullan

server.listen(port, () => {
    console.log(`Server is listening on port ${port} ===\n`);
});
``