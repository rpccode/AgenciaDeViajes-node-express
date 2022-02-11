
import express from  "express";
import router from "./router/index.js";
import db from './Config/db.js';


const app = express()


//conectar a la base de datos
db.authenticate()
        .then( () => console.log('Base de Datos Conectada'))
        .catch(error => console.log(error));


// habilitar pug_style
app.set('view engine', 'pug');

//obterner el year actual

app.use((req, res,next)=>{

    const year = new Date();        

        res.locals.ActualYear = year.getFullYear();
        res.locals.nombreSitio='Agencia de Viajes';
    next();
});

//agregar BodyParse para leer los datos del usuario

app.use(express.urlencoded({extended: true}));


//agrega el router
app.use('/', router);

//definir la carpeta publica
app.use(express.static('public'));

// agregar puerto y host
const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';



app.listen(port,host, () => console.log(`El servidor esta funcionando ${port}!`))