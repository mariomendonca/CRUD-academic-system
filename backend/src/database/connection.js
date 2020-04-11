const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development)

module.exports = connection
//usar o connection nos arquivos que vao se conectar com o banco de dados