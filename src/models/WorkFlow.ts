import { debug } from 'util';

export default class implements Model {
  db = null
  constructor({ db }) {
    this.db = db
  }
  public async getAll() {
    try {
      const WorkFlows: Promise<WorkFlow[]> = await this.db('WorkFlow').select('*')
      return WorkFlows
    } catch (err) {
      debug(err)
      return err
    }
  }

  public async getOne (queryOptions: QueryOptions) {
    try {
      const WorkFlow: Promise<WorkFlow> = await this.db('WorkFlow')
        .select('*')
        .where(queryOptions);
      return WorkFlow[0]
    } catch (err) {
      debug(err)
      return err
    }
  }

  public async remove (model: WorkFlow) {
    try {
      const deleted: Promise<any> = await this.db('WorkFlow').delete().where(model)
      return deleted
    } catch (err) {
      debug(err)
      return err
    }
  }

  public async upsert (model: WorkFlow) {
    try {
      const exist: Promise<WorkFlow> = await this.db('WorkFlow').select('*').where({ ID: model.ID })
      if (exist) {
        const update = await this.db('WorkFlow').update(model).where({ ID: model.ID }).returning('*')
        return update[0]
      } else {
        const newWorkFlow = await this.db('WorkFlow').insert(model).returning('*')
        return newWorkFlow[0]
      }
    } catch (err) {
      debug(err)
      return err
    }
  }
}
