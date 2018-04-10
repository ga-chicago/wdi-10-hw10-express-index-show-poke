const express = require('express');
const app = express();

const port = 3000;

app.get('/welcome', (req, res) => {
	res.send("Welcome to the Pokemon App!")
})

app.listen(3000, () => {
	console.log("Server listening on port 3000");
})