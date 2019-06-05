
exports.seed = function(knex) {
      return knex('projects').insert([
        {name: 'WebDB Challenge', description: 'complete this backend assignment', completed: false},
        {name: 'WebDB Brownie Challenge', description: 'complete this backend assignment', completed: false}
      ])
};
