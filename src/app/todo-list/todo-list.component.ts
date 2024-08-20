import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoList = [
    {
      id: 1,
      content: "Buy groceries",
    },
    {
      id: 2,
      content: "Pay bills"
    }
  ]

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id)

    console.log(this.todoList)
  }
}
