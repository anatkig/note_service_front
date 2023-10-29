import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Note, Priority, Status } from '../../modals/note';
import { NoteService } from '../note.service';
import { of } from 'rxjs';
import { NoteListPageComponent } from './note-list-page.component';
import { NoteComponent } from '../note/note.component';

describe('NoteListPageComponent', () => {
  let component: NoteListPageComponent;
  let fixture: ComponentFixture<NoteListPageComponent>;
  let noteServiceMock: jasmine.SpyObj<NoteService>;

  const mockNotes: Note[] = [
    {
      id: '1',
      title: 'Test Note 1',
      description: 'Description 1',
      priority: Priority.Medium,
      status: Status.Incomplete,
    },
    {
      id: '2',
      title: 'Test Note 2',
      description: 'Description 2',
      priority: Priority.Low,
      status: Status.Complete,
    },
  ];

  beforeEach(async () => {
    noteServiceMock = jasmine.createSpyObj('NoteService', [
      'getAllNotes',
      'deleteNote',
      'updateNote',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        RouterTestingModule,
      ],
      declarations: [NoteListPageComponent, NoteComponent],
      providers: [{ provide: NoteService, useValue: noteServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteListPageComponent);
    component = fixture.componentInstance;

    noteServiceMock.getAllNotes.and.returnValue(of(mockNotes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display notes', () => {
    const noteTiles = fixture.debugElement.queryAll(By.css('mat-grid-tile'));
    expect(noteTiles.length).toBe(2);
  });

  it('should navigate to the add note page when the add button is clicked', () => {
    spyOn(component, 'openAddNotePage');
    const addButton = fixture.debugElement.query(
      By.css('button[mat-icon-button]')
    ).nativeElement;
    addButton.click();
    expect(component.openAddNotePage).toHaveBeenCalled();
  });

  it('should call deleteNote() when a note is deleted', () => {
    spyOn(component, 'deleteNote');
    component.deleteNote(mockNotes[0].id);
    expect(component.deleteNote).toHaveBeenCalledWith(mockNotes[0].id);
  });

  it('should update note status when a note is completed', () => {
    spyOn(component, 'completeNote');
    component.completeNote(mockNotes[0]);
    expect(component.completeNote).toHaveBeenCalledWith(mockNotes[0]);
  });
});
