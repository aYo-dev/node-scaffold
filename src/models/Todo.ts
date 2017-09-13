import db from '../../config/database';
import { TODO_TABLE } from '../constants/dbTables';
import { IModel, ITodo } from '../interfaces/models';

class Todo implements IModel {
  constructor(todo: ITodo) {
    this.title = todo.title;
    this.content = todo.content;
    this.guid = todo.guid;
    this.ts = todo.ts;
  }

  title: string;
  content: string;
  guid: string;
  ts: string;

  static async findByGuid(guid): Promise<ITodo> {
    return await db.table(TODO_TABLE).where({guid});
  }

  static async findAll(): Promise<[ITodo]> {
    return await db.table(TODO_TABLE);
  }

  async save(): Promise<ITodo> {
    return await db.insert(this, '*')
      .into(TODO_TABLE);
  }
};

export default Todo;
