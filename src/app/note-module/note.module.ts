import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module/material.module';
import { NoteComponent } from './note/note.component';
import { ViewDetailsPageComponent } from './view-details-page/view-details-page.component';
import { NoteListPageComponent } from './note-list-page/note-list-page.component';
import { AddEditPageComponent } from './add-edit-page/add-edit-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NoteComponent,
    ViewDetailsPageComponent,
    NoteListPageComponent,
    AddEditPageComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class NoteModule {}
