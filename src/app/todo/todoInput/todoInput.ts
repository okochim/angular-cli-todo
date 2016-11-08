import {Component, OnInit} from '@angular/core';

import {TodoStore} from '../stores/todoStore';
import {Todo} from '../stores/todo';
import {Category} from '../stores/category';

@Component({
  selector: 'todoInput',
  templateUrl: './todoInput.html',
  styleUrls: ['./todoInput.css'],
})

export class TodoInputComponent implements OnInit {
  private todo: Todo;
  private categorys: Category[];
  public selectedId: number = 1;

  constructor(private todoStore: TodoStore) {}

  ngOnInit(): void {
    this.todo = new Todo(null,'','');
    this.categorys = [
      { id: 1, name: "仕事"},
      { id: 2, name: "プライベート"},
      { id: 3, name: "その他"}
    ];
  }

  public onSubmit(): void {
    this.todoStore.add(this.todo);
    this.todo = new Todo(null,'','');
  }
}