const { User } = require('../models');

const userdata = [
    {
        username: 'mkanczuz',
        password: 'password1'
    },
    {
        username: 'ariff',
        password: 'password2'
    },
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;