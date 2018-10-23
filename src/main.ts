import * as Knex from 'knex'
import knexfile from './knexfile'
import WorkFlowModel from './models/WorkFlow'

export async function connectToDB () {
  try {
    const db: Knex = Knex(knexfile);
    const workflow: Model = new WorkFlowModel({ db })
    const all: WorkFlow[] = await workflow.getAll()
    const one: WorkFlow = await workflow.getOne({ id: all[0].ID })
    console.log(one);
  } catch (err) {
    console.log(err)
  }
}

connectToDB()