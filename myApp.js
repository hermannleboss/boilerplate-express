let express = require('express');
const bodyParser = require("body-parser");
let app = express();
console.log("Hello World")
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

// Serve Static Assets
app.use('/public', express.static(__dirname + "/public"))

/**
 Build a simple logger. For every request, it should log to the console a string taking the following format: method path
 - ip. An example would look like this: GET /json - ::ffff:127.0.0.1. Note that there is a space between method and path
 and that the dash separating path and ip is surrounded by a space on both sides. You can get the request method (http verb),
 the relative route path, and the caller’s ip from the request object using req.method, req.path and req.ip. Remember
 to call next() when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what
 happens when some request arrives.
 */
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
/**
 * In the route app.get('/now', ...) chain a middleware function and the final handler. In the middleware function you should add the current time to the request object in the req.time key. You can use new Date().toString(). In the handler, respond with a JSON object, taking the structure {time: req.time}.
 */
app.get('/now', function (req, res, next) {
    req.time = new Date().toString()
    next()
}, function (req, res) {
    res.send({time: req.time})
})

app.get('/:word/echo', (req, res) => {
    res.send({echo: req.params.word})
})

app.get('/name', (req, res) => {
    res.send({name: `${req.query.first} ${req.query.last}`})
})

app.use(bodyParser.urlencoded({extended: false}))
// Serve JSON on a Specific Route
app.get('/json', (req, res) => {
    let message = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase()
    }
    res.send({"message": message})
})


module.exports = app;
