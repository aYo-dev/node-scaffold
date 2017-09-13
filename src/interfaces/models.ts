export interface IModel {
  save(): Promise<any>;
};

export interface ITodo {
  content: string;
  title: string;
  ts?: string;
  guid?: string;
}