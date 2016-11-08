import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Todo} from './todo';

@Injectable()
export class TodoStore {
  private todos: Todo[] = [];
 	constructor() {
		let perseTodos = JSON.parse(localStorage.getItem('todoList') || '[]');
		this.todos = perseTodos.map( (todo: {id: number,title: string, desc: string}) => {
			let ret = new Todo(todo.id,todo.title,todo.desc);
			return ret;
		});
	}
	private updateStore() {
		localStorage.setItem('todoList', JSON.stringify(this.todos));
	}
  getTodos(): Promise<Todo[]> {
    return Promise.resolve(this.todos);
  }

  getTodo(id: number): Promise<Todo> {
    return this.getTodos().then(todoList => todoList.find(todo => todo.id == id));
  }

  public add(todo: Todo): void {
    this.todos.push(todo);
    this.updateStore();
  }

  public remove(todo: Todo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateStore();
  }

}