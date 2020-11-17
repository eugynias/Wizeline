const express =require ('express');
const CakesCtrl =require('../controllers/CakesController');

const Router = express.Router();

Router.get('/cakes') //
      .post('/')  //
      .get('/:key/:value',CakesCtrl.find,CakesCtrl.show)
      .put('/:key/:value',CakesCtrl.find,CakesCtrl.update)
      .delete('/:key/:value',CakesCtrl.find,CakesCtrl.remove);

module.exports =Router;

