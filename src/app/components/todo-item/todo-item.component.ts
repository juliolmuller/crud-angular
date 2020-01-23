import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {}

  setClasses() {
    return {
      todo: true,
      'is-completed': this.todo.completed
    }
  }

  toggle(todo: Todo): boolean {
    return todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    console.log('deleted');
  }
}
