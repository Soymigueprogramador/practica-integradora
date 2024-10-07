import express from 'express'

const app = express()
const PORT = 3000; 

app.get('/', ( req, res ) => {
    res.send('Hola a todos')
});

app.listen(PORT, ( req, res ) => {
    console.log(`Hola a todos!! Estamos en el http://localhost:${PORT}`);
});