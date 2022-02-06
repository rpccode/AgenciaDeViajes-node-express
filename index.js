
import express from  "express";
import router from "./router/index.js";


const app = express()
const port = process.env.port || 4000;

// habilitar pug_style
app.set('view engine', 'pug');

//agrega el router
app.use('/', router);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))