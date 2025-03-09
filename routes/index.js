const routes=require('express').Router();
const userControllers=require('../controllers/users');

routes.get('/contacts',userControllers.getAll);
routes.get('/contacts/:id',userControllers.getSingle);

module.exports=routes;