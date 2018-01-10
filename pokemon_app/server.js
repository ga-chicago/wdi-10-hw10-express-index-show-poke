const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js")


// Route for welcome to Pokemon app

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!")
})

app.get("/pokemon", (req, res) => {
	// res.send(pokemon)

	res.render("index.ejs")
})
















app.listen(3000, () => {
	console.log("Listening to port 3000")
})

