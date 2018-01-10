const express = require('express');
const app = express();
const port = 3000;

const pokemon = require("./models/pokemon.js");

app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) =>{
    res.render('index.ejs', {
        //pass entire array
        pokemon: pokemon
    });
});


app.get('/pokemon/:id', (req, res) =>{
    res.send(req.params.id);
});





app.listen(port, () =>{
    console.log("Listening.. for it on Port: ", port)
});

