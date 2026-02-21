import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../shared/interfaces/todo.interface';
import { Alert } from "../shared/components/alert/alert";
import { AddTodoForm } from "./add-todo-form/add-todo-form";
import { Todo } from './todo/todo';
import { TodoService } from '../core/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, Alert, AddTodoForm, Todo],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})

export class TodoList implements OnInit, OnDestroy {
  todos: ToDo[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  constructor(private serviceTodo: TodoService) {
    this.todos = this.serviceTodo.todos;
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  addToDo(todo: string): void {
    if(todo.length <= 3) {
      this.errorMessage = 'Zadanie musi mieć więcej niż 3 znaki';
      return;
    }
    this.serviceTodo.addToDo(todo);
    this.todos = this.serviceTodo.todos;
  }

  deleteTodo(i: number) {
    this.serviceTodo.deleteTodo(i);
    this.todos = this.serviceTodo.todos;
  }

  changeTodoStatus(i: number) {
    this.serviceTodo.changeTodoStatus(i);
    this.todos = this.serviceTodo.todos;
  }

  ngOnInit() {
    this.sub = this.serviceTodo.todoChanged.subscribe({
      next: arrTodos => this.todos = arrTodos
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
