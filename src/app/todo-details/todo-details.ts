import { Component, OnInit } from '@angular/core';
import { ToDo } from '../shared/interfaces/todo.interface';
import { TodoService } from '../core/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-todo-details',
  imports: [CommonModule],
  templateUrl: './todo-details.html',
  styleUrl: './todo-details.css',
})
export class TodoDetails implements OnInit {
  todo: ToDo | undefined;
  id!: number;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
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
      this.todo = this.todoService.getTodo(this.id);
    });
  }
}
