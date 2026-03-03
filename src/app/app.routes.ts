import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'contacts', component: ContactComponent},
  {path: '**', redirectTo: ''},
];
