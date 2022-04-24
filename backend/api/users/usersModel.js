const db = require("../../data/db-config.js");

const getAll = async () => {
    return await db('users');
}

module.exports = { getAll };
