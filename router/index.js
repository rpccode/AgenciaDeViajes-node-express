import express from  "express";
import {paginaInicio,paginaNosotros,paginaTestimoniales,paginaViajes} from '../Controllers/paginasControllers.js';

const router = express.Router();


router.get('/', paginaInicio );

router.get('/nosotros', paginaNosotros );
router.get('/testimoniales', paginaTestimoniales );
router.get('/viajes', paginaViajes );


export default router;