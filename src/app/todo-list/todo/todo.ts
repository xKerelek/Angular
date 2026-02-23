import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../shared/interfaces/todo.interface';
import { CommonModule } from '@angular/common';
import { Modal } from '../../shared/components/modal/modal';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, Modal],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  @Input() todo!: ToDo;
  @Input() id!: number;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  openModal = false;

  constructor(private router: Router, private route: ActivatedRoute) {

  }


  changeToDoStatus(todo: ToDo) {
    this.changeStatus.emit(this.id);
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }

  navigateToDetails() {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.route,
      // state: { example: 'test' }
    }
    this.router.navigate([this.todo.id], navigationExtras)
  }
}
