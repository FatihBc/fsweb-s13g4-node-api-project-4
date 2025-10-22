const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const kullanıcılar = [];

app.get('/api/kullanıcılar', (req, res) => {
    res.json(kullanıcılar);
});

app.post('/api/kayıtol', (req, res) => {
    const { kullaniciadi, sifre } = req.body;
    if (!kullaniciadi || !sifre) {
        return res.status(400).json({ mesaj: 'Kullanıcı adı ve şifre zorunludur' });
    }
    const yeniKullanici = { id: Date.now(), kullaniciadi, sifre };
    kullanıcılar.push(yeniKullanici);
    res.status(201).json(yeniKullanici);
});

app.post('/api/giriş', (req, res) => {
    const { kullaniciadi, sifre } = req.body;
    const kullanıcı = kullanıcılar.find(k => k.kullaniciadi === kullaniciadi && k.sifre === sifre);
    if (kullanıcı) {
        res.json({ mesaj: `Hoş geldin, ${kullaniciadi}!` });
    } else {
        res.status(401).json({ mesaj: 'Geçersiz kimlik bilgileri' });
    }
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
