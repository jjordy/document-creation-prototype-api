const uuid = require('uuid')
const faker = require('faker')
const _ = require('lodash')

const createIds = (amt = 3) => _.times(amt, () => uuid.v4());

const generateMarkdown = () => {
  return `
  # MY TEST PAGE
  ---
  ### Please fill out the fields below
  {{model}}
`
}
 
exports.seed = async db => {
 /* -- CLEAN TABLES --
  * ------------------
  * ------------------
  */
  try {
    await db('WorkFlow').del()
    await db('Model').del()
    await db('ModelFields').del()
    await db('Page').del()
    await db('Route').del()
    await db('WorkFlowModels').del()
    await db('WorkFlowPages').del()
    await db('WorkFlowRoutes').del()


    /* --- CONSTANTS ---
    * ------------------
    * ------------------
    */
    const tenantId = uuid.v4()
    const workflowIds = createIds();
    const modelIds = createIds();
    const pageIds = createIds();
    const routeIds = createIds();
    const storageIds = createIds();

    /* ---- INSERTS -----
      * ------------------
      * ------------------
      */
    console.log(workflowIds)
    await db('WorkFlow').insert([
      {
        ID: workflowIds[0],
        Name: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        TenantID: tenantId,
        Description: faker.lorem.paragraph(),
      },
      {
        ID: workflowIds[1],
        Name: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        TenantID: tenantId,
        Description: faker.lorem.paragraph(),
      },
      {
        ID: workflowIds[2],
        Name: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        TenantID: tenantId,
        Description: faker.lorem.paragraph(),
      },
    ]);

    await db('Model').insert([
      { ID: modelIds[0], name: 'Test Model 0', StorageID: storageIds[0] },
      { ID: modelIds[1], name: 'Test Model 1', StorageID: storageIds[1] },
      { ID: modelIds[2], name: 'Test Model 2', StorageID: storageIds[2] },
    ]);

    await db('ModelFields').insert([
      { ID: uuid.v4(), ModelID: modelIds[0], FieldName: 'Name', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[0], FieldName: 'Email', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[0], FieldName: 'Age', FieldType: 'number' },
      { ID: uuid.v4(), ModelID: modelIds[0], FieldName: 'Address', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[1], FieldName: 'I Attest', FieldType: 'boolean' },
      { ID: uuid.v4(), ModelID: modelIds[2], FieldName: 'First Name', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[2], FieldName: 'Last Name', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[2], FieldName: 'Email Address', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[2], FieldName: 'Address', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[2], FieldName: 'City', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[2], FieldName: 'State', FieldType: 'string' },
      { ID: uuid.v4(), ModelID: modelIds[2], FieldName: 'ZipCode', FieldType: 'string' }
    ])

    await db('Page').insert([
      { ID: pageIds[0], Name: 'Test Page 0', Description: faker.lorem.paragraph(), Content: generateMarkdown() },
      { ID: pageIds[1], Name: 'Test Page 1', Description: faker.lorem.paragraph(), Content: generateMarkdown() },
      { ID: pageIds[2], Name: 'Test Page 2', Description: faker.lorem.paragraph(), Content: generateMarkdown() }
    ])

    await db('Route').insert([
      { ID: routeIds[0], Path: '/', Description: faker.lorem.paragraph(), Name: 'Home Route' },
      { ID: routeIds[1], Path: '/second', Description: faker.lorem.paragraph(), Name: 'Second Route' },
      { ID: routeIds[2], Path: '/third', Description: faker.lorem.paragraph(), Name: 'Third Route' }
    ])

    await db('WorkFlowModels').insert([
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], ModelID: modelIds[0] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], ModelID: modelIds[1] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], ModelID: modelIds[2] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], ModelID: modelIds[0] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], ModelID: modelIds[1] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], ModelID: modelIds[2] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[2], ModelID: modelIds[0] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[2], ModelID: modelIds[1] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[2], ModelID: modelIds[2] },
    ])
    await db('WorkFlowPages').insert([
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], PageID: pageIds[0] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], PageID: pageIds[1] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], PageID: pageIds[2] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], PageID: pageIds[0] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], PageID: pageIds[1] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], PageID: pageIds[2] },
    ])

    await db('WorkFlowRoutes').insert([
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], RouteID: routeIds[0] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], RouteID: routeIds[1] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[0], RouteID: routeIds[2] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], RouteID: routeIds[0] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], RouteID: routeIds[1] },
      { ID: uuid.v4(), WorkFlowID: workflowIds[1], RouteID: routeIds[2] },
    ])
  } catch (err) {
    console.log(err)
  }

}