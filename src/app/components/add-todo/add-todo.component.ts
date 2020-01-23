import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() add: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit() {}

  submit() {
    this.add.emit({
      title: this.title,
      completed: false
    });
    this.title = '';
  }
}
