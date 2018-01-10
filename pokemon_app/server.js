const express = require('express');
const app = express();
const port = 3000;

// include a get route / that will res.send('Welcome to the Pokemon App!'); 
// So that when you got to localhost:3000, you will see Welcome to the Pokemon App!

app.get('/pokemon/',(req, res)=>{
	res.send('Welcome to the Pokemon App!')
})


app.listen(port, () => {
  console.log("Listening on port 3000......")
});