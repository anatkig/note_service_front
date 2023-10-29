import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPageComponent } from './note-module/add-edit-page/add-edit-page.component';
import { ViewDetailsPageComponent } from './note-module/view-details-page/view-details-page.component';
import { NoteListPageComponent } from './note-module/note-list-page/note-list-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'note-list-page',
    pathMatch: 'full',
  },
  {
    path: 'note-list-page',
    component: NoteListPageComponent,
  },
  {
    path: 'add-note-page',
    component: AddEditPageComponent,
  },
  {
    path: 'edit-note-page/:id',
    component: AddEditPageComponent,
  },
  {
    path: 'view-note-details-page/:id',
    component: ViewDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
