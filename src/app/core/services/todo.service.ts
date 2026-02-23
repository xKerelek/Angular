import { Injectable } from '@angular/core';
import { ToDo } from '../../shared/interfaces/todo.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // private _todos: ToDo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];
  private _todos: ToDo[] =  [];
  todoChanged = new Subject<ToDo[]>();

  constructor() {}

  public get todos() {
    return this._todos.slice();
  }

  public set todos(arrTodos: ToDo[]) {
    this._todos = [...arrTodos];
    this.todoChanged.next(this.todos);
  }

  addToDo(todo: ToDo): void {
    this._todos.push(todo);
    this.todoChanged.next(this.todos);
  }

  deleteTodo(id: number) {
    this._todos = this.todos.filter((todo, index) => todo.id !== id);
    this.todoChanged.next(this.todos);
  }

    changeTodoStatus(id: number, isComplete: boolean) {
    const searchTodo = this.todos.find(todo => todo.id === id);
    if(searchTodo) {
      searchTodo.isComplete = isComplete;
    }

    this.todoChanged.next(this.todos);
  }
  // saveToLocalStorage() {
  //   localStorage.setItem('todos', JSON.stringify(this.todos));
  // }
}
