import { Injectable } from '@angular/core';
import { ToDo } from '../../shared/interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  _todos: ToDo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];

  constructor() {}
  public get todos() {
    return this._todos.slice();
  }

  addToDo(name: string): void {
    this._todos.push({name: name, isComplete: false});
    this.saveToLocalStorage();
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((todo, index) => index !== i);
    this.saveToLocalStorage();
  }

    changeTodoStatus(i: number) {
    this._todos[i] = {
      ...this.todos[i],
      isComplete: !this.todos[i].isComplete
    }
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }



}
