import {Component, OnInit} from '@angular/core';
import {TodoStore} from '../stores/todoStore';
import {Todo} from '../stores/todo';

@Component({
  selector: 'todoList',
  template: `
          <h2>todoList</h2>
		  <todoItem *ngFor="let todo of todos" [todo]="todo"></todoItem>
    `,
  styles: [`
  	h2 {
	  	font-size:20px;
	  }
  `]
})

export class TodoListComponent implements OnInit {
	private todos: Todo[];
	constructor(private todoStore: TodoStore) {}
    public ngOnInit () {
        this.todoStore.getTodos().then(todos => this.todos = todos);
    }

}