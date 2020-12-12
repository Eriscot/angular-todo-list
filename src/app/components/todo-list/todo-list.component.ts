import { Component, OnInit } from '@angular/core';
import {TodoListService} from './todo-list.service';
import {Todo} from './models/todo.model';
import {Store} from '@ngrx/store';
import {retrieveTodosSelector} from '../../state/todos/selectors';
import {retrieveTodos} from '../../state/todos/actions';
import {FiltersModel} from './models/filters.model';
import {Filters} from './utils/filters.util';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(
    private todolistService: TodoListService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.todolistService
      .getAllTodos()
      .subscribe(
        (todos: Todo[]) => this.store.dispatch(retrieveTodos({todos}))
      );
    this.changeFilter(FiltersModel.ALL);
  }

  changeFilter(filter: string): void {
    this.store.select(retrieveTodosSelector).subscribe((todos) => {
      const filteredTodos = Filters[filter](todos);
      this.todos = filteredTodos;
    });
  }
}
