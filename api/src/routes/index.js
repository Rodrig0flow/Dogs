
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = require('express').Router();
// const { YOUR_API_KEY } = process.env;
// const { Race, Temperament } = require('../db');
require('dotenv').config();

const { nameDogs } = require('../controllers/nameDogs')
const { getAllDogs } = require('../controllers/getAllDogs');
const { postDogs } = require('../controllers/postDogs');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/dogs',nameDogs,getAllDogs)
router.post('/dogs',postDogs);


module.exports = router;
