import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, AddContactComponent, FormsModule],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  isFormOpen: boolean = false;
  initialData: any[] = [];
  searchText = '';
  editContacts: string | null = null;
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

  get filteredContacts() {
    if (!this.searchText) {
      return this.initialData;
    }

    const lowerCaseText = this.searchText.toLowerCase();
    return this.initialData.filter((contacts) =>
    contacts.firstName.toLowerCase().includes(lowerCaseText) || contacts.lastName.toLowerCase().includes(lowerCaseText));
  }

  startEdit(contact: any) {
    this.editContacts = contact.id;
  }

  cancelEdit() {
    this.editContacts = null;
    this.fetchContacts();
  }

  saveEdit(contact: any) {
    this.contactService.updateContacts(contact).subscribe({
      next: () => this.editContacts = null,
      error: (err) => console.log("Error while updating contact", err)
    });
  }

  toggleModal() {
    this.isFormOpen = !this.isFormOpen;
  }
}
