import { Note, Priority } from './../../modals/note';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;
  @Output() info: EventEmitter<Note> = new EventEmitter();
  @Output() edit: EventEmitter<Note> = new EventEmitter();
  @Output() delete: EventEmitter<Note> = new EventEmitter();
  @Output() complete: EventEmitter<Note> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

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

  onInfoClick(): void {
    this.info.emit(this.note);
  }

  onEditClick(): void {
    this.edit.emit(this.note);
  }

  onDeleteClick(): void {
    this.delete.emit(this.note);
  }

  onCompleteClick(): void {
    this.complete.emit(this.note);
  }
}
