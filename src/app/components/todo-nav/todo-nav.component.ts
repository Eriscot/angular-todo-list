import {EventEmitter, Component, OnInit, Output, Input, OnChanges} from '@angular/core';
import {FiltersModel} from '../todo-list/models/filters.model';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.scss']
})
export class TodoNavComponent {
  filter = FiltersModel.ALL;
  @Output() filterChange = new EventEmitter<string>();

  constructor() {
  }


  changeFilter(filter: string): void {
    this.filterChange.emit(filter);
    this.filter = FiltersModel[filter];
  }
}
