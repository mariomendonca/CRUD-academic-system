const express = require('express')
const connection = require('./database/connection')


const routes = express.Router() //modulo de rotas do express

routes.post('/students', async (req, res) => {
    const {name, email, cpf, nationality, numberPhone} = req.body //corpo da requisição

    await connection('students').insert({
        name, 
        email, 
        cpf, 
        nationality, 
        numberPhone
    })
    
    
    
    return res.end('cadastro realizado')
})


module.exports = routes