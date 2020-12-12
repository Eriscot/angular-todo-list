import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeaderModule} from './components/header/header.module';
import {AppRoutingModule} from './routing/app-routing.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/todos/reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {TodoNavModule} from './components/todo-nav/todo-nav.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [
    StoreModule.forRoot({
      todos: reducer
    }),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    TodoNavModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
