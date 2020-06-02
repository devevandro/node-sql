const express = require('express');
const UserController = require('./controllers/UserControllers');
const AddressController = require('./controllers/AddressControllers');
const TechController = require('./controllers/TechControllers');

const routes = express.Router();

//insere e lista todos os usuários
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

//cria um endereço para um usuário
routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

//cria um endereço para um usuário
routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

module.exports = routes;
