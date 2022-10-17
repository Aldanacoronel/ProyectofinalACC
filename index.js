const express = require('express');
const path = require('path');
const hbs = require('hbs');


const PORT = 7000;
const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));



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





app.listen(PORT, () => {
    console.log(`Se activo nuesta app!! en el puerto ${PORT}`);
});