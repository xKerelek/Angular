import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {RouterOutlet} from '@angular/router';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, AlertComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini-crm';
}
