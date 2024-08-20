import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = "http://localhost:8000";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/get_tasks`);
  }
}
