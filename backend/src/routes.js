const express = require('express')
const connection = require('./database/connection')
const studentsController = require('./controllers/studentsController')

const routes = express.Router() //modulo de rotas do express




routes.get('/students', studentsController.index)
routes.get('/students/:cpf', studentsController.ListStudent)
routes.post('/students', studentsController.create)
routes.delete('/students/:cpf', studentsController.delete)

module.exports = routes