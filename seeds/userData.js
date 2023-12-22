const { User } = require('../models');
const userData = [
    {
        "username": "JaneDoe",
        "email": "JaneDoe@gmail.com",
        "password": "hello1234!"
    },
    {
        "username": "JohnDoe",
        "email": "JohnDoe@email.com",
        "password": "byebye123!"
    },
    {
        "username": "JessDoe",
        "email": "JessDoe@email.com",
        "password": "good123!"
    },
];

const seedUser = () =>User.bulkCreate(userData);
module.exports = seedUser;