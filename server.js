var express = require('express'),
    wine = require('./routes/wines.js'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var app = express();

var env = process.env.NODE_ENV || 'development';

if ('development' == env) {
    app.use(morgan('dev'));     // log every request to the console
    app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());    // parse application/json
}

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);


app.listen(3000);

console.log('Listening on port 3000...');