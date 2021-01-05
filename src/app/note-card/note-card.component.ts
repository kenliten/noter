import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.less']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
