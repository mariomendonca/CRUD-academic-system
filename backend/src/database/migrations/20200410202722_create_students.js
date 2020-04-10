
exports.up = function(knex) {
  knex.schema.createTable('students', function(table){
      table.string('id').primary()
  })
};

exports.down = function(knex) {
  
};
