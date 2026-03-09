import {Component, inject, OnInit} from '@angular/core';
import { CommonModule} from '@angular/common';
import { AddContactComponent } from '../add-contact/add-contact.component';
import {ContactService} from '../contact.service';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, AddContactComponent],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  isFormOpen: boolean = false;
  initialData: any[] = [];
  contactService = inject(ContactService);


  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contactService.getContacts().subscribe({
      next: (contacts) => this.initialData = contacts,
      error: (err) => console.log("Error while fetching contacts", err)
    });
  }

  onAddContact(newContact: any) {
    this.contactService.createContacts(newContact).subscribe({
      next: (contacts) => this.initialData.push(contacts),
      error: (err) => console.log("Error while adding contact", err),
      complete: () => this.toggleModal()
    });
  }

  onChangeStatus(contact: any) {
    const updatedContact = {...contact, isAvailable: !contact.isAvailable};
    this.contactService.updateContacts(updatedContact).subscribe({
      next: (serverResponse) => { contact.isAvailable = serverResponse.isAvailable;},
      error: (err) => console.log("Error while updating contact", err)
    });
  }

  onDelete(contactToDelete: any) {
    this.contactService.deleteContacts(contactToDelete.id).subscribe({
      next: () => this.initialData = this.initialData.filter((item: any) => item.id !== contactToDelete.id),
      error: (err) => console.log("Error while deleting contact", err)
    });
  }

  toggleModal() {
    this.isFormOpen = !this.isFormOpen;
  }
}
