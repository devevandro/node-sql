const User = require('../models/User');

module.exports = {
    //listando os usuários
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    //inserindo um novo usuário
    async store(req, res) {
        const {name, email} = req.body;

        const user = await User.create({name, email});

        return res.json(user);
    }
};
