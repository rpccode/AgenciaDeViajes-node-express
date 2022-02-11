import express from  "express";
import {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViajes
} from '../Controllers/paginasControllers.js';
import {
  guardarTestimoniales
} from '../Controllers/testimonialController.js';


const router = express.Router();


router.get('/', paginaInicio );

router.get('/nosotros', paginaNosotros );

router.get('/testimoniales', paginaTestimoniales );
router.post('/testimoniales', guardarTestimoniales );

router.get('/viajes', paginaViajes );

router.get('/viajes/:slug', paginaDetalleViajes );




export default router;