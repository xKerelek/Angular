import { Injectable } from '@angular/core';
import { ToDo } from '../../shared/interfaces/todo.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: ToDo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];
  todoChanged = new Subject<ToDo[]>();

  constructor() {}
  public get todos() {
    return this._todos.slice();
  }

  getTodo(index: number): ToDo | undefined {
    return this.todos[index];
  }

  addToDo(name: string): void {
    this._todos.push({name: name, isComplete: false});
    this.saveToLocalStorage();
    this.todoChanged.next(this.todos);
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((todo, index) => index !== i);
    this.saveToLocalStorage();
    this.todoChanged.next(this.todos);
  }

    changeTodoStatus(i: number) {
    this._todos[i] = {
      ...this.todos[i],
      isComplete: !this.todos[i].isComplete
    }
    this.saveToLocalStorage();
    this.todoChanged.next(this.todos);
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }



}
