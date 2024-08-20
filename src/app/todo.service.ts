import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = "http://localhost:8000";
  private todoListSubject = new BehaviorSubject<Todo[]>([]);
  todoList$ = this.todoListSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  private getTasks(): void {
    this.http.get<Todo[]>(`${this.apiUrl}/get_tasks`).subscribe(tasks => {
      this.todoListSubject.next(tasks);
    });
  }

  addTasks(todo: Omit<Todo, 'id'>): Observable<Todo> {
    const formData = new FormData();
    formData.append('content', todo.content);

    // Debugging: Check FormData content
    // formData.forEach((value, key) => {
    //   console.log(`FormData Key: ${key}, Value: ${value}`);
    // });

    return this.http.post<Todo>(`${this.apiUrl}/add_tasks`, formData).pipe(
      tap(newTask => {
        this.todoListSubject.next([...this.todoListSubject.value, newTask])
      })
    );
  }
}
