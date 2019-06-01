const express = require('express');
const server = (express());

server.use(express.json())

const knex = require('knex');
const dbConfig = require('./knexfile.js')

server.get('/', (req, res) => {
    res.send(" Let's do some sprint!")
})

module.exports = server;