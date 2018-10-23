
exports.up = async (db) => {
  await db.schema.createTable('WorkFlow', table => {
    table.uuid('ID').notNullable().primary()
    table.string('Name').notNullable()
    table.uuid('TenantID').notNullable()
    table.string('Description')
  })

  await db.schema.createTable('Model', table => {
    table.uuid('ID').notNullable().primary()
    table.string('Name').notNullable()
    table.uuid('StorageID').notNullable()
  })

  await db.schema.createTable('ModelFields', table => {
    table.uuid('ID').notNullable().primary()
    table.uuid('ModelID').notNullable()
    table.string('FieldName').notNullable()
    table.string('FieldType').notNullable()
    table.foreign('ModelID').references('Model.ID')
  })

  await db.schema.createTable('Route', table => {
    table.uuid('ID').notNullable().primary()
    table.string('Path').notNullable()
    table.string('Description').notNullable()
    table.string('Name').notNullable()
  })

  await db.schema.createTable('Page', table => {
    table.uuid('ID').notNullable().primary()
    table.string('Name').notNullable()
    table.string('Description')
    table.text('Content', 'longtext')
  })

  await db.schema.createTable('WorkFlowModels', table => {
    table.uuid('ID').notNullable().primary()
    table.uuid('WorkFlowID').notNullable()
    table.uuid('ModelID').notNullable()
    table.foreign('WorkFlowID').references('WorkFlow.ID')
    table.foreign('ModelID').references('Model.ID')
  })

  await db.schema.createTable('WorkFlowRoutes', table => {
    table.uuid('ID').notNullable().primary()
    table.uuid('WorkFlowID').notNullable()
    table.uuid('RouteID').notNullable()
    table.foreign('WorkFlowID').references('WorkFlow.ID')
    table.foreign('RouteID').references('Route.ID')
  })

  await db.schema.createTable('WorkFlowPages', table => {
    table.uuid('ID').notNullable().primary()
    table.uuid('WorkFlowID').notNullable()
    table.uuid('PageID').notNullable()
    table.foreign('WorkFlowID').references('WorkFlow.ID')
    table.foreign('PageID').references('Page.ID')
  })
}

exports.down = async (db) => {

}


