import { Component, OnInit } from '@angular/core';

import { Note } from '../note';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = NOTES;

  constructor() { }

  ngOnInit(): void {
  }

}
