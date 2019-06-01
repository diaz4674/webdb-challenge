const knex = require('knex');
const router = require('express').Router();

const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development);

router.get('/', (req, res) => {
    res.send(" Let's do some sprint!")
})

module.exports = router;