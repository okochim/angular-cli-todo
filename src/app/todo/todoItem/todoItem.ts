import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {TodoStore} from '../stores/todoStore';
import {Todo} from '../stores/todo';

@Component({
  selector: 'todoItem',
  templateUrl: './todoItem.html',
	styleUrls: ['./todoItem.css']
})

export class TodoItemComponent {
	@Input('todo')
	private todo: Todo;

	constructor(private router: Router,private todoStore: TodoStore) {
	}
	remove(todo: Todo){
		this.todoStore.remove(todo);
	}
  public gotoDetail(todo: Todo) {
    let link = ['/detail', todo.id];
    this.router.navigate(link);
  }
}