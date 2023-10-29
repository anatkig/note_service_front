import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note, Priority, Status } from '../../modals/note';
import { NoteService } from '../note.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-edit-page',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.scss'],
})
export class AddEditPageComponent implements OnInit {
  note: Note = {
    id: '',
    title: '',
    description: '',
    priority: Priority.Low,
    status: Status.Incomplete,
  };
  title: string = '';
  isEditMode = false;
  priorities = Object.values(Priority);
  statuses = Object.values(Status);

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const noteId = params.get('id');
      if (noteId) {
        this.isEditMode = true;
        this.fetchNote(noteId);
      } else {
        // reset to a default note if there's no ID
        this.isEditMode = false;
        this.note = {
          id: '',
          title: '',
          description: '',
          priority: Priority.Low,
          status: Status.Incomplete,
        };
      }
    });
  }

  fetchNote(noteId: string): void {
    this.noteService.getNoteById(noteId).subscribe((data) => {
      this.note = { ...data };
    });
  }

  onSave(): void {
    if (this.isEditMode) {
      this.noteService.updateNote(this.note.id, this.note).subscribe(() => {
        this.router.navigate(['/']); // Navigate back to note list
      });
    } else {
      const note = { ...this.note, id: uuidv4() };
      this.noteService.createNote(note).subscribe((newNote: Note) => {
        this.router.navigate(['/']); // Navigate back to note list
      });
    }
  }

  onDelete(): void {
    this.noteService.deleteNote(this.note.id).subscribe(() => {
      this.router.navigate(['/']); // Navigate back to note list
    });
  }
  goBack(): void {
    this.router.navigate(['/']); // Navigate back to note list
  }
}
