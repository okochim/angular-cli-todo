import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoStore} from '../stores/todoStore';

@Component({
  selector: 'todos',
  template: `
    <div id="container">
  		<h1>{{title}}</h1>
		  <todoInput></todoInput>
		  <todoList></todoList>
    </div>
    `,
  styles: [`
    #container {
        width: 500px;
        height: 100%;
    }
  `]
})

export class TodoComponent implements OnInit{
  private title: string;
  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }
}