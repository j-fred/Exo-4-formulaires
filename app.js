const express = require("express");
const app = express();
const bodyParser = require('body-parser');


const port = 7777;

app.use("/static", express.static('static'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
/**
 * Route vers index.html 
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


/**
 * Route vers index.html 
 */
app.post('/add', function (req, res) {
    const num_1 = Number(req.body.num1);
    const num_2 = Number(req.body.num2);
    const add = num_1 + num_2;
   // res.send(`${add}`);
    res.send(add+"");
});


/**
 * Port d'écoute du serveur
 */
const listener = app.listen(port, function () {
    console.log('Serveur demarré sur le port ' + listener.address().port);
})