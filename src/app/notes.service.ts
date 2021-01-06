import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private url: string = 'http://localhost:3000/api/v1/notes';

  constructor(private http: HttpClient) { }

  addNote(data: {title:string; body:string;}): Observable<Note> {
    return this.http.post<Note>(`${this.url}/${data.title}/${data.body}`, data);
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.url}/${id}`);
  }

  updateNote(id: number, data: {title: string; body: string;}): Observable<Note> {
    return this.http.put<Note>(`${this.url}/${id}/${data.title}/${data.body}`, data);
  }

  deleteNote(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
