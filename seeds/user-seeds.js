const { User } = require('../models');

const userData = [
    {
        "username": "Jaycee",
        "email": "Jaycee@gmail.com",
        "password": "password12345"
    },
    {
        "username": "Vince",
        "email": "Vince@gmail.com",
        "password": "password23456"
    },
    {
        "username": "Aj",
        "email": "Aj@gmail.com",
        "password": "password34567"
    },
    {
        "username": "Chelsea",
        "email": "Chelsea@gmail.com",
        "password": "password45678"
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;