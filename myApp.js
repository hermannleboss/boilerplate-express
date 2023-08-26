let express = require('express');
let app = express();
console.log("Hello World")
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

// Serve Static Assets
app.use('/public', express.static(__dirname + "/public"))



































module.exports = app;
