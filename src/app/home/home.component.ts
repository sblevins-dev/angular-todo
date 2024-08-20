import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
