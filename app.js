const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto 3000')
})

app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/registro', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});
app.get('/ingresar', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});