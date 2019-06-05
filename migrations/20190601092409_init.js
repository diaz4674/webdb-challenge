
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', (tbl) => {
        tbl.increments()
        tbl.string('name', 128).notNullable().unique()
        tbl.string('description', 1000).notNullable() 
        tbl.boolean('completed').notNullable()
    })
        .createTable('actions',(tbl) => {
            tbl.increments()
            tbl.string('description').notNullable()
            tbl.string('notes')
            tbl.integer('projects_id').unsigned().notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE')
            tbl.boolean('completed').notNullable()

        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Projects').dropTableIfExists('actions')
};
