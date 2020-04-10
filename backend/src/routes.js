const express = require('express')
const routes = express.Router() //modulo de rotas do express

routes.post('/users', (req, res) => {
    const body = req.body
    console.log(body)
    
    
    return res.json({
        aluno: 'mario',
        email: 'mario@gmail',
        cpf: 10548973440
    })
})


module.exports = routes