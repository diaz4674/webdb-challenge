const express = require('express');
const server = (express());


const projects_actionsRouter = require('./project-router.js');

server.use(express.json())

server.use('/', projects_actionsRouter);



module.exports = server;