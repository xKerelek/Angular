import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm,  } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Alert } from "../../shared/components/alert/alert";
import { FirstLetter } from "../../shared/directives/first-letter";

@Component({
  selector: 'app-add-todo-form',
  imports: [FormsModule, Alert, CommonModule, NgIf, FirstLetter],
  templateUrl: './add-todo-form.html',
  styleUrl: './add-todo-form.css',
})
export class AddTodoForm {
  @Output() addToDoTask = new EventEmitter<string>();
  todoName = '';

  addToDo(form: NgForm) {
    this.addToDoTask.emit(this.todoName);
    console.log(form);
  }
}
