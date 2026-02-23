import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToDo } from '../../shared/interfaces/todo.interface';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoApi {

  constructor(private http: HttpClient, private todoService: TodoService) {}

  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('http://localhost:3000/todo').pipe(
      tap((todos) => this.todoService.todos = todos)
    );
  }

  getTodo(id: number): Observable<ToDo> {
    return this.http.get<ToDo>(`http://localhost:3000/todo/${id}`)
  }

  postTodos(todo: Omit<ToDo, "id">): Observable<ToDo> {
    return this.http.post<ToDo>("http://localhost:3000/todo", todo).pipe(
      tap(todo => this.todoService.addToDo(todo))
    )
  }

  deleteTodos(id: number): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:3000/todo/${id}`).pipe(
      tap(() => this.todoService.deleteTodo(id))
    );
  }

  patchTodos(id: number, todo: Omit<ToDo, "id" | "name">): Observable<ToDo> {
    return this.http.patch<ToDo>(`http://localhost:3000/todo/${id}`, todo).pipe(
      tap((todo) => this.todoService.changeTodoStatus(todo.id, todo.isComplete))
    );
  }


}
