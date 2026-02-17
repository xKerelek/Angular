import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../shared/interfaces/todo.interface';
import { Alert } from "../shared/components/alert/alert";

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, Alert],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})

export class TodoList {
  todos: ToDo[] = [];
  errorMessage: string = '';

  addToDo(todo: string): void {
    if(todo.length <= 3) {
      this.errorMessage = 'Zadanie musi składać się z przynajmniej 4 znaków';
      return;
    }

    this.todos.push({name: todo, isComplete: false});
    console.log("Aktualna lista ToDo!", this.todos);
  }

  changeToDoStatus(todo: ToDo) {
    todo.isComplete = !todo.isComplete;
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }
}
