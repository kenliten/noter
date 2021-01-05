import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.less']
})
export class NoteEditorComponent implements OnInit {

  note: Note;
  title: string;
  body: string;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  saveNote(): void {
    this.notesService.updateNote(this.note.id, {title: this.title, body: this.body});
    this.location.back();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('noteId');
    this.notesService.getNote(id)
      .subscribe(note => {this.note = note; this.title = note.title; this.body = note.body;});
  }

}
