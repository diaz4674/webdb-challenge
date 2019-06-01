
exports.up = function(knex) {
    return knex.schema
        .createTable('Projects', (tbl) => {
        tbl.increments()
        tbl.string('name', 128).notNullable().unique()
        tbl.string('description', 1000).notNullable() 
        tbl.boolean('completed').notNullable()
        tbl.integer('actions_id').notNullable().references('id').inTable('actions').onDelete('CASCADE').onUpdate('CASCADE')

    })
        .createTable('actions',(tbl) => {
            tbl.increments()
            tbl.string('description').notNullable()
            tbl.string('additional info')
            tbl.boolean('completed').notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Projects').dropTableIfExists('actions')
};
