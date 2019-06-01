
exports.seed = function(knex, Promise) {
  return knex('actions').insert([
    {description: 'make endpoints', notes: 'this is more info', projects_id: 1, completed: false},
    {description: 'make brownies fly', notes: 'this is happening', projects_id: 2, completed: false},
    {description: 'Now you fly', notes: 'on a plane', projects_id: 2, completed: false}
  ])
};
