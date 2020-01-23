import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  name: string;
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.name = 'Josnei';
    this.todos = this.todoService.getTodos();
  }
}
