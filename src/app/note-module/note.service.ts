import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

enum Status {
  Incomplete = 'Incomplete',
  Complete = 'Complete',
}

export interface Note {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl = 'https://noteserviceback.azurewebsites.net/api/notes';

  constructor(private http: HttpClient) {}

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  getNoteById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }

  updateNote(id: string, note: Note): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, note);
  }

  deleteNote(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
