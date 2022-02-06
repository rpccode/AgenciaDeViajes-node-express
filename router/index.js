import express from  "express";

const router = express.Router();


router.get('/', (req, res) => res.send('inicio'));
router.get('/nosotros', (req, res) => res.send('Nosostros'));
router.get('/contacto', (req, res) => res.send('contacto'));


export default router;