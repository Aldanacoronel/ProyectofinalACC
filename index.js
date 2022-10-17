
//Creamos constantes y requerimos las libreríasa
const express = require('express');
const path = require('path');
const hbs = require('hbs');

//Ejecutamos express y guardamos el puerto
const PORT = 7000;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Configuraciones
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});


app.get('/productos', (req, res) => {
    res.render('productos');
});


app.get('/preguntasfrec', (req, res) => {
    res.render('preguntasfrec');
});




//Aplicación en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Se activo nuesta app!! en el puerto ${PORT}`);
});