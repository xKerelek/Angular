import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { TodoList } from './todo-list/todo-list';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [Header, TodoList, Footer, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('pierwszy-projekt');
  //name = "Karol";
  defaultValue = "Przykładowa wartość";

  displayConsoleLog() {
    console.log("Użyto Event Binding");
  }

  name= "";
}
