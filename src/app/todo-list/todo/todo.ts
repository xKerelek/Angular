import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../shared/interfaces/todo.interface';
import { CommonModule } from '@angular/common';
import { Modal } from '../../shared/components/modal/modal';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, Modal],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  @Input() todo!: ToDo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  openModal = false;


  changeToDoStatus(todo: ToDo) {
    this.changeStatus.emit(this.i);
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
