// Import pg
const {Pool} = require('pg');
const pool = new Pool({
    connectionString: process.env.PG_URL,
    max: 5
});

const usersModel = require('./usersModel');
usersModel.init(pool);

const model = {
    users: usersModel
};

module.exports = model;