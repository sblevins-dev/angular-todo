import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todoService: TodoService = inject(TodoService);
  todoList$ = this.todoService.todoList$;

  constructor() {}

  ngOnInit(): void {
    // this.todoList$ = this.todoService.getTasks();
    this.todoList$.subscribe(tasks => {
      console.log("Tasks in component: ", tasks)
    });
  }

  // getTasks(): void {
  //   this.todoService.getTasks().subscribe(todoList => this.todoList$ = todoList);
  // }
}
