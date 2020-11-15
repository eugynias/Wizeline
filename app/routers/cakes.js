const express =require ('express');
const CakesCtrl =require('../controllers/CakesController');

const Router = express.Router();

Router.get('/cakes')
      .post('/')
      .get('/:key/:value')
      .put('/:key/:value')
      .delete('/:key/:value');

module.exports =Router;

