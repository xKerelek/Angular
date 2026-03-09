import {Component} from '@angular/core';
import { CommonModule} from '@angular/common';
import { AddContactComponent } from '../add-contact/add-contact.component';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, AddContactComponent],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  isFormOpen = false;
  initialData = [
    {id: "1", firstName: "Jane", lastName: "Doe", phoneNumber: "111222333", email: "jane.doe@gmail.com", isAvailable: false },
    {id: "2", firstName: "Burnice", lastName: "White", phoneNumber: "333222111", email: "burn.ice@gmail.com", isAvailable: true },
    {id: "3", firstName: "Yi", lastName: "Xuan", phoneNumber: "444111222", email: "yixuan@gmail.com", isAvailable: true },
  ];

  onChangeStatus(contact: any) {
    contact.isAvailable = !contact.isAvailable;
  }

  onDelete(contact: any) {
    this.initialData = this.initialData.filter((item: any) => contact.id !== item.id);
  }

  toggleModal() {
    this.isFormOpen = !this.isFormOpen;
  }

  onAddContact(newContact: any) {
    this.initialData.push(newContact);
    this.toggleModal();
  }

}
