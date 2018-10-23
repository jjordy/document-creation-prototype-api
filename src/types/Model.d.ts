
/// <reference path="../../node_modules/@types/knex/index.d.ts" />

type GetAll = () => Promise<WorkFlow[]>
type GetOne = (query?: QueryOptions) => Promise<WorkFlow>
type Upsert = (object: QueryOptions) => Promise<WorkFlow>
type Remove = (object: WorkFlow) => Promise<any>
type QueryOptions = object;

declare interface Model {
  db: object
  getAll: GetAll
  getOne: GetOne
  upsert: Upsert
  remove: Remove
}


