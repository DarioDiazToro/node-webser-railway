require('dotenv').config();
const express = require('express');
const  hbs = require('hbs');

const app = express();
const port = process.env.PORT;


//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'));

const info = {
    titulo:'Curso de Node',
    nombre:'Fernando Herrera'
};

app.get('/',(req,res)=>{
    res.render('home',info);
});

app.get('/generic',(req,res)=>{
    res.render('load-generic',info);
});

app.get('/index',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
   
});

app.get('/elements',(req,res)=>{
    res.render('load-elements',info);
});

app.get('*',(req,res)=>{
    res.send('Page not found');
});

app.listen(port,()=>{
 console.log(`estoy en el puerto ${port}`);

});