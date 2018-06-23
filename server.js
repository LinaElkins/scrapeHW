// require dependencies
var express = require('express');
var mongoose = require('mongoose');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var cherrio = require('cheerio');
var axios = require('axios');
var db = require('./models');
var PORT = 3000;
// instantiate Express App
var app = express();

// Designate public folder as static directory
app.use(express.static(_dirname + '/public'));

// connect Handlebars to Express app
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// use bodyParser
app.use(bodyParser.urlencoded({
    extended:true
}));





