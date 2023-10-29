import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note, Priority, Status } from '../../modals/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-view-details-page',
  templateUrl: './view-details-page.component.html',
  styleUrls: ['./view-details-page.component.scss'],
})
export class ViewDetailsPageComponent implements OnInit {
  note: Note = {
    id: '',
    title: '',
    description: '',
    priority: Priority.Low,
    status: Status.Incomplete,
  };
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const noteId = params.get('id');
      if (noteId) {
        this.fetchNote(noteId);
      }
    });
  }

  fetchNote(noteId: string): void {
    this.noteService.getNoteById(noteId).subscribe((data) => {
      this.note = { ...data };
    });
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate back to note list
  }
}
