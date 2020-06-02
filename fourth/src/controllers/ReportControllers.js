const {Op} = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        //encontrar todos os usuarios que tem email que termine com "mail.com"
        //Desse usuários buscar todos que moram na rua Flores da Mata
        //Desse usuários buscar as tecnologias que começam cok React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@mail.com'
                }
            },

            include: [
                {association: 'addresses', where: {street: 'Flores da Mata'}},
                {association: 'techs', required: false, where: {name: {[Op.iLike]: 'React%'}}},
            ]
        });

        return res.json(users);
    }
};
