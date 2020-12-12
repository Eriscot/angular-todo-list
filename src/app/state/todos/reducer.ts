import {Action, createReducer, on} from '@ngrx/store';
import {Todo} from '../../components/todo-list/models/todo.model';
import {retrieveTodos} from './actions';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: []
};

const todosReducer = createReducer(
  initialState,
  on(retrieveTodos, (state, { todos }) => ({
    ...state,
    todos
  }))
);

export const reducer = (state, action) => {
  return todosReducer(state, action);
};
