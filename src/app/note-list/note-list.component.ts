import { Component, OnInit } from '@angular/core';

import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  notes: Note[];

  getNotes(): void {
    this.notesService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  deleteNote(id: number): void {
    this.notesService.deleteNote(id);
  }

  constructor( private notesService: NotesService ) {}

  ngOnInit(): void {
    this.getNotes();
  }

}
