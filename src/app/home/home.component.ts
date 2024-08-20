import { Component, inject } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // todoList$!: Observable<Todo[]>;
  todoService: TodoService = inject(TodoService);

  // ngOnInit(): void {
  //   // this.getTasks();
  //   this.todoList$ = this.todoService.getTasks();
  // }

  // getTasks(): void {
  //   this.todoService.getTasks().subscribe(todoList => this.todoList = todoList);
  //   console.log(this.todoList)
  // }

  addTask(content: string): void {
    content = content.trim();
    if (!content) return;
    this.todoService.addTasks({content}).subscribe();
  }
}
