import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {TodoStore} from '../stores/todoStore';
import {Todo} from '../stores/todo';

@Component({
  selector: 'todoDetail',
  templateUrl: './todoDetail.html',
  styleUrls: ['./todoDetail.css']
})

export class TodoDetailComponent implements OnInit {
    private todo: Todo;
	constructor(private todoStore: TodoStore,private route: ActivatedRoute) {
	}
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.todoStore.getTodo(id).then(todo => this.todo = todo);
            }
        });
    }
    public goBack(): void {
      window.history.back();
    }
}