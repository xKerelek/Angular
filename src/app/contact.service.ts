import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/contacts'
  private http = inject(HttpClient);


  getContacts(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  createContacts(newContact: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newContact);
  }

  updateContacts(contact: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${contact.id}`, contact);
  }

  deleteContacts(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
