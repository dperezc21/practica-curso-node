const express = require('express');
const router = express.Router();

router.get('/create', (req, res) => {
    res.send('hola como estas, usuario creado');
});

module.exports = router;