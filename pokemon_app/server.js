const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js")


app.use(express.static("public"))



// Route for welcome to Pokemon app

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!")
})

app.get("/pokemon", (req, res) => {
	// res.send(pokemon)

	res.render("index.ejs", {
		pokemon: pokemon
	})
})

app.get("/pokemon/:index", (req, res) => {
	// console.log("In the show route")
	// res.send(req.params.index)

	res.render("show.ejs", {
		pokemon: pokemon[req.params.index]
	})
})
















app.listen(3000, () => {
	console.log("Listening to port 3000")
})

