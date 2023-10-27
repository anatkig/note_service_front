import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteListPageComponent } from './note-module/note-list-page/note-list-page.component';
import { EditPageComponent } from './note-module/edit-page/edit-page.component';

@NgModule({
  declarations: [AppComponent, NoteListPageComponent, EditPageComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
