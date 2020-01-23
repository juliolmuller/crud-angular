import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = new URL('https://jsonplaceholder.typicode.com/todos?_limit=10');
  baseUrl = this.apiUrl.origin + this.apiUrl.pathname;
  querystring = this.apiUrl.search;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    const url = this.baseUrl + this.querystring;
    return this.http.get<Todo[]>(url);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo, this.httpOptions);
  }

  toggleCompleted(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, this.httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo>  {
    const url = `${this.baseUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, this.httpOptions);
  }
}
