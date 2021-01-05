import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    component: NoteListComponent
  },
  {
    path: 'new',
    component: NoteFormComponent
  },
  {
    path: 'note/:noteId',
    component: NoteDetailComponent
  },
  {
    path: 'edit/:noteId',
    component: NoteEditorComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
