// Requer o express, cria o router para essa classe
const express = require('express');
const login = require('../Controllers/login');
const router = express.Router()


router.post("/login", login);
                
module.exports = router;
                