import {Todo} from '../models/todo.model';
import {FiltersModel} from '../models/filters.model';

const getAllTodos = (todos: Todo[]): Todo[] => todos;

const getTodoTodos = (todos: Todo[]): Todo[] => todos.filter(todo => !todo.completed);

const getCompletedTodos = (todos: Todo[]): Todo[] => todos.filter(todo => todo.completed);

export const Filters = {
  [FiltersModel.ALL]: getAllTodos,
  [FiltersModel.TODO]: getTodoTodos,
  [FiltersModel.COMPLETED]: getCompletedTodos
};
