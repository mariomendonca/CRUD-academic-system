//up = oq fazer 
exports.up = function(knex) {
  return knex.schema.createTable('students', function(table){
      table.increments()
      table.string('name').notnullable()
      table.string('email').notnullable()
      table.string('cpf').notnullable()
      table.string('nationality').notnullable()
      table.string('numberPhone').notnullable()
  })
};
//down = se der errado oq fazer, deletar a tabela
exports.down = function(knex) { 
  return knex.schema.dropTable('students')
};
