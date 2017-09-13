import Todo from '../models/Todo';
import { ITodo } from '../interfaces/models';

export const create = async (data): Promise<ITodo> => {
  const todo = new Todo(data);

  return await todo.save();
};

export const findByGuid = async (guid): Promise<ITodo> => {
  return await Todo.findByGuid(guid);
};


export const findAll = async (): Promise<[ITodo]> => {
  return await Todo.findAll();
};

export default {
  create,
  findAll,
  findByGuid
};
