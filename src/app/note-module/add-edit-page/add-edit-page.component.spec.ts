import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Note, Priority, Status } from '../../modals/note';
import { NoteService } from '../note.service';
import { AddEditPageComponent } from './add-edit-page.component';
import { EMPTY, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddEditPageComponent', () => {
  let component: AddEditPageComponent;
  let fixture: ComponentFixture<AddEditPageComponent>;
  let mockNoteService: jasmine.SpyObj<NoteService>;

  const mockNote: Note = {
    id: '1',
    title: 'Test Note',
    description: 'Test Description',
    priority: Priority.Medium,
    status: Status.Incomplete,
  };

  beforeEach(async () => {
    mockNoteService = jasmine.createSpyObj('NoteService', [
      'getNoteById',
      'updateNote',
      'createNote',
      'deleteNote',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [AddEditPageComponent],
      providers: [
        { provide: NoteService, useValue: mockNoteService },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(new Map([['id', '1']])),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPageComponent);
    component = fixture.componentInstance;

    mockNoteService.getNoteById.and.returnValue(of(mockNote));
    mockNoteService.updateNote.and.returnValue(EMPTY);
    mockNoteService.createNote.and.returnValue(of(mockNote));
    mockNoteService.deleteNote.and.returnValue(EMPTY);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display the note in edit mode', () => {
    expect(component.note).toEqual(mockNote);
    expect(component.isEditMode).toBeTrue();
  });

  it('should save updated note when in edit mode', () => {
    component.onSave();
    expect(mockNoteService.updateNote).toHaveBeenCalledWith(
      mockNote.id,
      mockNote
    );
  });

  it('should create a new note when in add mode', () => {
    component.isEditMode = false;
    component.onSave();
    expect(mockNoteService.createNote).toHaveBeenCalledWith(
      jasmine.objectContaining({
        title: mockNote.title,
        description: mockNote.description,
        priority: mockNote.priority,
        status: mockNote.status,
      })
    );
  });

  it('should delete the note', () => {
    component.onDelete();
    expect(mockNoteService.deleteNote).toHaveBeenCalledWith(mockNote.id);
  });

  it('should navigate back when "Back" button is clicked', () => {
    spyOn(component, 'goBack');
    const backButton = fixture.nativeElement.querySelector(
      'button[mat-raised-button]'
    );
    backButton.click();

    expect(component.goBack).toHaveBeenCalled();
  });
});
