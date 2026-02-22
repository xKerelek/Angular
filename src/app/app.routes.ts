import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Home } from "./home/home";
import { TodoList } from "./todo-list/todo-list";
import { PageNotFound } from "./page-not-found/page-not-found";
import { TodoDetails } from "./todo-details/todo-details";

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'todo', component: TodoList, title: 'Dodaj zadanie!' },
  { path: 'todo/:id', component: TodoDetails, title: 'Szczegóły zadania!' },
  { path: '**', component: PageNotFound, title: 'Page Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutes {}
