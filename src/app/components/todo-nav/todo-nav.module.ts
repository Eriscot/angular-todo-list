import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoNavComponent } from './todo-nav.component';



@NgModule({
    declarations: [TodoNavComponent],
    exports: [
        TodoNavComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TodoNavModule { }
