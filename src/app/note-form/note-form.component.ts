import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.less']
})
export class NoteFormComponent implements OnInit {

  title: string;
  body: string;

  constructor(private notesService: NotesService,
    private location: Location
    ) { }

  saveNote(): void {
    if (this.title && this.body) {
      this.notesService.addNote({title: this.title, body: this.body});
      this.location.back();
    } else {
      alert('You need to fill both fields');
    }
  }

  ngOnInit(): void {
  }

}
