//up = oq fazer 
exports.up = function(knex) {
  return knex.schema.createTable('students', function(table){
      table.increments()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('cpf').notNullable()
      table.string('nationality').notNullable()
      table.string('numberPhone').notNullable()
  })
};
//down = se der errado oq fazer, deletar a tabela
exports.down = function(knex) { 
  return knex.schema.dropTable('students')
};