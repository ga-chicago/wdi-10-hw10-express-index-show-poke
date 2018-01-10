const express = require('express');
const app = express();
const port = 3000;
const pokemons = require('./models/pokemon.js');


// include a get route / that will res.send('Welcome to the Pokemon App!'); 
// So that when you got to localhost:3000, you will see Welcome to the Pokemon App!
// app.get('/pokemon/', (req, res)=>{
// 		res.send(pokemon)
// });


app.get('/pokemon/', (req, res)=>{

  	res.render('index.ejs', {
    pokemon: pokemons
	})

});


// Inside your server.js, add a new get route /pokemon/:id
// That will res.send(req.params.id);
// So, when you go to localhost:3000/pokemon/whatever
// whatever will show up in the browser

app.get('/pokemon/:id', (req, res)=>{
	res.send(req.params.id);

})



app.listen(port, () => {
  console.log("Listening on port 3000......")
});

