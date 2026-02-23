import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDo } from '../shared/interfaces/todo.interface';
import { Alert } from '../shared/components/alert/alert';
import { AddTodoForm } from './add-todo-form/add-todo-form';
import { Todo } from './todo/todo';
import { TodoService } from '../core/services/todo.service';
import { Subscription } from 'rxjs';
import { TodoApi } from '../core/services/todo-api';

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

  constructor(
    private todoService: TodoService,
    private todoApi: TodoApi,
  ) {}

  clearErrorMessage() {
    this.errorMessage = '';
  }

  addToDo(todo: string): void {
    this.todoApi.postTodos({name: todo, isComplete: false}).subscribe({
      error: error => {
        this.errorMessage = "Wystąpił błąd. Spróbuj ponownie"
      }
    })
  }

  deleteTodo(id: number) {
    this.todoApi.deleteTodos(id).subscribe({
      error: error => {
        this.errorMessage = "Wystąpił błąd. Spróbuj ponownie"
      }
    })
  }

  changeTodoStatus(id: number, todo: ToDo) {
    // this.todoService.changeTodoStatus(i);
    // this.todos = this.todoService.todos;
    this.todoApi.patchTodos(id, {isComplete: !todo.isComplete}).subscribe({
      error: error => {
        this.errorMessage = "Wystąpił błąd. Spróbuj ponownie"
      }
    })
  }

  ngOnInit(): void {
    this.todos = this.todoService.todos;

    this.sub = this.todoService.todoChanged.subscribe({
      next: (arrTodos) => (this.todos = arrTodos),
    });

    if (this.todos.length === 0) {
      this.todoApi.getTodos().subscribe({
        error: (err) => {
          console.error('Wywaliło błąd HTTP:', err);
        },
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
