import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TodoComponent} from './todos/todos';
import {TodoInputComponent} from './todoInput/todoInput';
import {TodoListComponent} from './todoList/todoList';
import {TodoItemComponent} from './todoItem/todoItem';
import {TodoDetailComponent}  from './todoDetail/todoDetail';
import {TodoStore} from './stores/todoStore';
import {todoRouting} from './todo.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      todoRouting
    ],
    declarations: [
      TodoComponent,
      TodoInputComponent,
      TodoListComponent,
      TodoItemComponent,
      TodoDetailComponent,
    ],
    providers: [TodoStore]
})
export class TodosModule { }