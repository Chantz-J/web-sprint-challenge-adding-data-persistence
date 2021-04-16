// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const server = express()
server.use(helmet())
server.use(express.json())

//Routes

server.get('/', (req, res) => {
    res.status(200).json('Recipe  server (web sprint challenge) up and running! 😉 Head over to /api to get started!')
})
server.get('/api', (req, res) => {
    res.status(200).json(`Welcome to the API!`)
})

module.exports = server