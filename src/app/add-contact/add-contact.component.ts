import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './add-contact.component.html',
  standalone: true,
  styleUrl: './add-contact.component.css'
})

export class AddContactComponent {
  @Output() addContactEvent = new EventEmitter<any>();

  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string= '';


  onAddContact() {
    const newContact = {
      id: Date.now().toString(),
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      isAvailable: false
    };
    this.addContactEvent.emit(newContact);
  };

  onClose() {
    this.firstName =  '';
    this.lastName = '';
    this.phoneNumber = '';
    this.email = '';
  };
}
