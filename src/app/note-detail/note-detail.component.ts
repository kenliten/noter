import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.less']
})
export class NoteDetailComponent implements OnInit {

  note: Note;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private notesService: NotesService
    ) { }

  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('noteId');
    this.notesService.getNote(id)
      .subscribe(note => this.note = note);
  }

  deleteNote(id): void {
    this.notesService.deleteNote(this.note.id);
    this.location.back();
  }

  ngOnInit(): void {
    this.getNote();
  }

}
