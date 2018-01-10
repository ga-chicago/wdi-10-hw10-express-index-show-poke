const express = require('express');
const app = express();
const port = 3000;

const pokemon = require("./models/pokemon.js");

//Route to homepage
app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!');
});

//Route to pokemon list
app.get('/pokemon', (req, res) =>{
    res.render('index.ejs', {
        //pass entire array
        pokemon: pokemon
    });
});

//--Route to pokemon index in arr number--
// app.get('/pokemon/:id', (req, res) =>{
//     res.send(req.params.id);
// });

//Route to show chosen pokemon with name and img
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id],
    });

    res.redirect('/pokemon')
});











app.listen(port, () =>{
    console.log("Listening.. for it on Port: ", port)
});

