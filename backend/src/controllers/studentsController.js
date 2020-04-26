const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        // const { page = 1} = req.query
        
        const [count] = await connection('students').count()
        
        const students = await connection('students')
        .select('*')
        // .limit(5)
        // .offset((page - 1)* 5)
        // paginaçao

        res.header('X-total-Count', count['count(*)'])

        return res.json(students)
    },

    async ListStudent(req, res) {
        const { cpf } = req.params

        const student = await connection('students')
          .where('cpf', cpf)
          .select('*')

        return res.json(student)
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
    },

    async delete(req, res) {
        const { cpf } = req.params 

        await connection('students')
          .where('cpf', cpf)
          .delete()

        return res.status(204).send()
    },

    // async update(req, res){
    //     const {name, email, cpf, nationality, numberPhone} = req.body
        

    //     await connection('students')
    //       .where('cpf', cpf)
    //       .update({
    //         name,
    //         email, 
    //         cpf, 
    //         nationality, 
    //         numberPhone
    //   })
    //     return res.json({ name })
    // }
}