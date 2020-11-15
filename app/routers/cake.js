const express =require ('express');
const CakeCtrl =require('../controllers/CakeController');

const Router = express.Router();

Router.get('/')
      .post('/')
      .get('/:key/:value')
      .put('/:key/:value')
      .delete('/:key/:value');

module.exports =Router;

