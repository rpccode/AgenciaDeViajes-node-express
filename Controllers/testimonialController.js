 import {Testimonial} from '../Models/testimoniales.js'
 
 const guardarTestimoniales = async (req, res) => {

    //validar 

    const { nombre, correo, mensaje } = req.body;

    const errores = [];

        if (nombre.trim()  === '') {
            errores.push({mensaje:'El Nombre esta vacio'});
            
        }
          if (correo.trim()  === '') {
            errores.push({mensaje:'El Correo esta vacio'});
            
        }
          if (mensaje.trim()  === '') {
            errores.push({mensaje:'El Mensaje esta vacio'});
            
        }


        if (errores.length > 0) {
            //consultar la base de datos
        const testimoniales = await Testimonial.findAll();    

        
            //mostrar vista de testimoniales
            res.render('testimoniales', { 
                 pagina:'Testimoniales',
                 errores,
                 nombre,
                 correo,
                 mensaje,
                 testimoniales
            })
        }else{
            //Guardar en la base de datos
            try {
                await Testimonial.create({
                    nombre,
                    correo,
                    mensaje
                });

                res.redirect('/testimoniales');
            } catch (error) {
                console.log(error);
            }


        }
        
        
    


};

export { 
    guardarTestimoniales
}
