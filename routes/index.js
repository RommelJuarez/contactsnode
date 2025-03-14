const routes=require('express').Router();
const userControllers=require('../controllers/users');

routes.use('/',require('./swagger'));
routes.get('/contacts',userControllers.getAll);
routes.get('/contacts/:id',userControllers.getSingle);
routes.post('/contacts/',userControllers.createContact);
routes.put('/contacts/:id',userControllers.updateContact);
routes.delete('/contacts/:id',userControllers.deleteContact);

module.exports=routes;