import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Note, Priority, Status } from '../../modals/note';
import { NoteService } from '../note.service';
import { ViewDetailsPageComponent } from './view-details-page.component';

describe('ViewDetailsPageComponent', () => {
  let component: ViewDetailsPageComponent;
  let fixture: ComponentFixture<ViewDetailsPageComponent>;
  let mockNoteService: jasmine.SpyObj<NoteService>;

  const mockNote: Note = {
    id: '1',
    title: 'Test Note',
    description: 'Test Description',
    priority: Priority.Medium,
    status: Status.Incomplete,
  };

  beforeEach(async () => {
    mockNoteService = jasmine.createSpyObj('NoteService', ['getNoteById']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatCardModule, MatButtonModule],
      declarations: [ViewDetailsPageComponent],
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
    fixture = TestBed.createComponent(ViewDetailsPageComponent);
    component = fixture.componentInstance;

    mockNoteService.getNoteById.and.returnValue(of(mockNote));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display the note', () => {
    expect(component.note).toEqual(mockNote);
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
