import {createAction, props} from '@ngrx/store';
import {TodosTypes} from './types';
import {Todo} from '../../components/todo-list/models/todo.model';

export const retrieveTodos = createAction(
    TodosTypes.RETRIEVE_TODOS,
    props<{ todos: Todo[] }>()
);
