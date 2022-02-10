import express from  "express";
import {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViajes
} from '../Controllers/paginasControllers.js';

const router = express.Router();


router.get('/', paginaInicio );

router.get('/nosotros', paginaNosotros );

router.get('/testimoniales', paginaTestimoniales );

router.get('/viajes', paginaViajes );

router.get('/viajes/:slug', paginaDetalleViajes );



export default router;