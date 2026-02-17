import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input() errorMessage!: string;
  @Output() clearMessage = new EventEmitter<void>();

  clearErrorMessage(): void {
    this.clearMessage.emit();
  }

}
