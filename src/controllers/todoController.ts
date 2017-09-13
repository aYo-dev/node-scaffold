import * as core from 'express-serve-static-core';
import * as todoService from '../services/todoService';

export const create = async (req: core.Request, res: core.Response) => {
  const todo = req.body.data;

  try {
    res.json(await todoService.create(todo));
    return;
  } catch (e) {
    throw e;
  }
};

export const get = async (req: core.Request, res: core.Response) => {
  const guid = req.params.guid;

  try {
    res.json(await todoService.findByGuid(guid));
    return;
  } catch (e) {
    throw e;
  }
};

export const getAll = async (req: core.Request, res: core.Response) => {
  try {
    res.json(await todoService.findAll());
    return;
  } catch (e) {
    throw e;
  }
};

export default {
  create,
  getAll,
  get
};
