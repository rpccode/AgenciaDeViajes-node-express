import{ Viaje } from '../Models/viajes.js';
import{ Testimonial } from '../Models/testimoniales.js';


const paginaInicio =async (req, res) => {
    
        //consultar 3 viiajes a base de datos
        try {
            const viajes = await Viaje.findAll({ limit: 3 });

            res.render('Inicio',{ 
            pagina:'Inicio',
            clase: 'home',
            viajes
            })
            
        } catch (error) {
            console.log(error);
        }
    
    

};

const paginaNosotros = (req, res) => {
    
    res.render('nosotros',{ 
        pagina:'Nosotros'
    })

};

const paginaTestimoniales = async (req, res) => {
    
    try {
        const testimoniales = await Testimonial.findAll();    
        res.render('Testimoniales',{ 
            pagina:'Testimoniales',
            testimoniales
        });    
    } catch (error) {
        console.log(error);
    }
    

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