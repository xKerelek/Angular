import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../shared/interfaces/todo.interface';
import { Alert } from "../shared/components/alert/alert";
import { AddTodoForm } from "./add-todo-form/add-todo-form";
import { Todo } from './todo/todo';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, Alert, AddTodoForm, Todo],
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

  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo, index) => index !== i);
  }
}
