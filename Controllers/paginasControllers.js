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


const paginaViajes = (req, res) => {
    
    
    
    res.render('Viajes',{ 
        pagina:'Viajes'
    })

};
export {
        paginaInicio,
        paginaNosotros,
        paginaTestimoniales,
        paginaViajes
}