import{ Viaje } from '../Models/viajes.js';

const paginaInicio =(req, res) => {
    
    
    
    res.render('Inicio',{ 
        pagina:'Inicio'
    })

};

const paginaNosotros = (req, res) => {
    
    res.render('nosotros',{ 
        pagina:'Nosotros'
    })

};

const paginaTestimoniales = (req, res) => {
    
    
    
    res.render('Testimoniales',{ 
        pagina:'Testimoniales'
    })

};


const paginaViajes = async  (req, res) => {
    
    //Consulatar Base de  datos

        const viajes = await Viaje.findAll();

        console.log(viajes);
    
    
    res.render('Viajes',{ 
        pagina:'Proximos Viajes',
        viajes,
    })

};
//muestra el viaje por su slug
const paginaDetalleViajes =  async (req, res) => {
   const { slug } = req.params;

   try {
       const viaje = await Viaje.findOne({where : { slug }});
       res.render('viaje', { 
           pagina: 'Informacion Viaje',
          viaje
       })
   } catch (error) {
       console.log(error);
   }
}
export {
        paginaInicio,
        paginaNosotros,
        paginaTestimoniales,
        paginaViajes,
        paginaDetalleViajes
}