const routes=require('express').Router();
const userControllers=require('../controllers/users');

routes.get('/',userControllers.getAll);
routes.get('/:id',userControllers.getSingle);

module.exports=routes;