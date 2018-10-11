require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var server = app.listen(process.env.PORT, function() {
    console.log('Server listening on %d', server.address().port);
});

app.get('/:status', function(req, res) {
    res.sendStatus(req.params.status);
});
