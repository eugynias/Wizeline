const express = require ('express');
const bodyParser = require ('body-parser');

const App = express ();

App.arguments(bodyParser.json());
App.arguments(bodyParser.urlencoded({extended: false}));

module.exports = App;
