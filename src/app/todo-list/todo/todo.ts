import { Component, Input } from '@angular/core';
import { ToDo } from '../../shared/interfaces/todo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  @Input() todo!: ToDo;
  @Input() i!: number;

  changeToDoStatus(todo: ToDo) {
    todo.isComplete = !todo.isComplete;
  }

}
