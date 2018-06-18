const express = require("express");
const app = express();

const port = 7777;

app.use("/static", express.static('static'));

/**
 * Route vers index.html 
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/**
 * Route vers le form 
 */
app.post('/add', function (req, res) {
    res.end();
});

/**
 * Port d'écoute du serveur
 */
const listener = app.listen(port, function () {
    console.log('Serveur demarré sur le port ' + listener.address().port);
})