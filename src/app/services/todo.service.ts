import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {}

  getTodos(): Todo[] {
    return [
      {
        id: 1,
        title: 'Levar o lixo',
        completed: true
      },
      {
        id: 2,
        title: 'Termianr projeto do Johnatan',
        completed: false
      },
      {
        id: 3,
        title: 'Passear com os cachorros',
        completed: false
      },
      {
        id: 4,
        title: 'Lavar a louça',
        completed: true
      }
    ];
  }
}
