import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoList: Todo[] = [];
  todoService: TodoService = inject(TodoService);

  constructor() {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTasks().subscribe(todoList => this.todoList = todoList);
  }
}
