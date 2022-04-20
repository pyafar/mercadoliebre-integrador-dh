const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor corriendo en puerto ' + process.env.PORT)
})

app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/registro', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});
app.get('/ingresar', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});
