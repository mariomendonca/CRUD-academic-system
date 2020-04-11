const express = require('express')
const connection = require('./database/connection')
const studentsController = require('./controllers/studentsController')

const routes = express.Router() //modulo de rotas do express




routes.get('/students', studentsController.index)
routes.post('/students', studentsController.create)

module.exports = routes