import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { SizeLimitPipe } from './size-limit.pipe';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteFormComponent,
    NoteDetailComponent,
    SizeLimitPipe,
    NoteCardComponent,
    NoteEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
