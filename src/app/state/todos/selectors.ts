import {createSelector} from '@ngrx/store';
import {IAppState} from '../app.state';

export const retrieveTodosSelector = createSelector(
  (state: IAppState) => state.todos,
  ({todos}) => todos
);
