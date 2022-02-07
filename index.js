
import express from  "express";
import router from "./router/index.js";
import db from './Config/db.js';


const app = express()
const port = process.env.port || 4000;

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



//agrega el router
app.use('/', router);

//definir la carpeta publica
app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))