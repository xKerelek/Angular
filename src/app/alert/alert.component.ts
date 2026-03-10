import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  private alertService = inject(AlertService);
  message: string | null = null;

  ngOnInit(): void {
    this.alertService.alert$.subscribe(message => {
      this.message = message;
    });
  }
}
