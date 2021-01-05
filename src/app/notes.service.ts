import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { NOTES } from './mock-notes';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  addNote(data: {title:string;body:string;}): Note {
    let note: Note;
    let lastNote: Note;
    lastNote = NOTES[NOTES.length - 1];
    note = {
      id: lastNote.id + 1,
      title: data.title,
      body: data.body
    }
    NOTES.push(note);
    return note;
  }

  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }

  getNote(id: number): Observable<Note> {
    return of(NOTES.find(note => note.id === id));
  }

  updateNote(id: number, data: {title: string; body: string;}): void {
    let targetIndex = NOTES.indexOf(NOTES.find(note => note.id === id));
    NOTES[targetIndex].title = data.title;
    NOTES[targetIndex].body = data.body;
  }

  deleteNote(id: number): boolean {
    if (NOTES.some(note => note.id === id)) {
      NOTES.splice(NOTES.indexOf(NOTES.find(n => n.id === id)), 1);
      return true;
    } else {
      return false;
    }
  }
}
