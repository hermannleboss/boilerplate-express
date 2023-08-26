let express = require('express');
let app = express();
console.log("Hello World")
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

// Serve Static Assets
app.use('/public', express.static(__dirname + "/public"))

// Serve JSON on a Specific Route
app.get('/json', (req, res) => {
  res.send({ "message": "Hello json" })
})
































module.exports = app;
