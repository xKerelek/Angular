import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  imports: [],
  templateUrl: './add-todo-form.html',
  styleUrl: './add-todo-form.css',
})
export class AddTodoForm {
  @Output() addToDoTask = new EventEmitter<string>();

  addToDo(todoName: string) {
    this.addToDoTask.emit(todoName);
  }
}
