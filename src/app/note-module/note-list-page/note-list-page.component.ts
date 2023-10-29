import { Component, OnInit } from '@angular/core';
import { Note, Priority, Status } from '../../modals/note';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list-page',
  templateUrl: './note-list-page.component.html',
  styleUrls: ['./note-list-page.component.scss'],
})
export class NoteListPageComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.fetchNotes();
  }
  fetchNotes(): void {
    this.noteService.getAllNotes().subscribe((fetchedNotes: Note[]) => {
      this.notes = fetchedNotes;
    });
  }
  getNoteColor(priority: Priority): string {
    switch (priority) {
      case Priority.Low:
        return 'green';
      case Priority.Medium:
        return 'yellow';
      case Priority.High:
        return 'red';
      default:
        return '';
    }
  }

  openAddNotePage(): void {
    this.router.navigate(['/add-note-page']);
  }

  openEditNoteModal(noteId: string): void {
    this.router.navigate(['/edit-note-page', noteId]);
  }

  openNoteDetails(noteId: string): void {
    this.router.navigate(['/view-note-details-page', noteId]);
  }

  deleteNote(noteId: string): void {
    this.noteService.deleteNote(noteId).subscribe(() => {
      this.notes = this.notes.filter((n) => n.id !== noteId);
    });
  }

  completeNote(note: Note): void {
    note.status = Status.Complete;
    this.noteService.updateNote(note.id, note).subscribe(() => {});
  }
}
