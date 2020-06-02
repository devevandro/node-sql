const express = require('express');
const UserController = require('./controllers/UserControllers');

const routes = express.Router();

routes.get('/users', UserController.index);

routes.post('/users', UserController.store);

module.exports = routes;
