const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const students = await connection('students').select('*')

        return res.json(students)
    },


    async create(req, res) {
        const {name, email, cpf, nationality, numberPhone} = req.body //corpo da requisição

        await connection('students').insert({
          name, 
          email, 
          cpf, 
          nationality, 
          numberPhone
        })

        return res.json({ name })
    }
}