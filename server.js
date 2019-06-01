const express = require('express');
const server = (express());


const projects_actionsRouter = require('./project-router.js');

server.use(express.json())

server.use('/api/projects', projects_actionsRouter);



module.exports = server;