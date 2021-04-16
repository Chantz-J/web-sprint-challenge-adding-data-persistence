// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const server = express()


//Routes
const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');

server.use(helmet())
server.use(express.json())
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);


server.get('/', (req, res) => {
    res.status(200).json('Server (web sprint challenge) up and running! 😉 Head over to /api to get started!')
})
server.get('/api', (req, res) => {
    res.status(200).json(`Welcome to the API! Try hitting these endpoints: 
    /api/projects, /api/resources, /api/tasks `)
})
 
module.exports = server