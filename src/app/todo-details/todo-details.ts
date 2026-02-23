import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToDo } from '../shared/interfaces/todo.interface';
import { TodoService } from '../core/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import {TodoApi} from '../core/services/todo-api';
import {switchMap} from 'rxjs';
import {Alert} from '../shared/components/alert/alert';

@Component({
  selector: 'app-todo-details',
  imports: [CommonModule, Alert],
  templateUrl: './todo-details.html',
  styleUrl: './todo-details.css',
})
export class TodoDetails implements OnInit {
  todo: ToDo | undefined;
  id!: number;
  errorMessage = '';

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private todoApi: TodoApi,
    private cdr: ChangeDetectorRef
  ) {}

  navigateToNextTodo() {
    this.router.navigate(['todo', this.id + 1]);
  }

  navigateBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      // this.todo = this.todoService.getTodo(this.id)
    })

    this.route.paramMap.pipe(
      switchMap((params) => this.todoApi.getTodo(Number(params.get('id'))))
    ).subscribe({
      next: todo => {
        this.todo = {...todo}
        this.cdr.detectChanges()
      },
      error: error => {
        if(error.status === 404) {
          this.errorMessage = 'Wystąpił błąd. Spróbuj ponownie'
        }
        this.cdr.detectChanges();
      }
    })
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }
}
