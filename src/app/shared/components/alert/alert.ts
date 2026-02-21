import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [CommonModule, NgIf],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input() errorMessage!: string;
  @Output() clearMessage = new EventEmitter<void>();
  @Input() showButton = false;

  clearErrorMessage(): void {
    this.clearMessage.emit();
  }
}
