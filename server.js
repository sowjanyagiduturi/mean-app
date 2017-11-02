var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = new express();

app.use(express.static(__dirname + '/client'));

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


app.listen(90);
console.log("App is running on port number 90");