import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { ViewDetailsPageComponent } from './view-details-page/view-details-page.component';

@NgModule({
  declarations: [
    NoteComponent,
    ViewDetailsPageComponent
  ],
  imports: [CommonModule],
})
export class NoteModule {}
