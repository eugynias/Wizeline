const express = require ('express');
const bodyParser = require ('body-parser');

const App = express ();

const Cakes = require('./routers/cakes')

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/cakes',Cakes)
module.exports = App;
