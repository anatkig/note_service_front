import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { Priority, Status } from './../../modals/note';
import { NoteComponent } from './note.component';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, MatTooltipModule],
      declarations: [NoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;

    component.note = {
      id: '1',
      title: 'Test Note',
      description: 'This is a description for the test note',
      priority: Priority.Medium,
      status: Status.Incomplete,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct note title', () => {
    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleElement.textContent).toBe('Test Note');
  });

  it('should display the correct note description', () => {
    const descriptionElement = fixture.debugElement.query(
      By.css('p')
    ).nativeElement;
    expect(descriptionElement.textContent).toBe(
      'This is a description for the test note'
    );
  });

  it('should emit an event when the info button is clicked', () => {
    spyOn(component.info, 'emit');
    const infoButton = fixture.debugElement.queryAll(By.css('button'))[0];
    infoButton.triggerEventHandler('click', null);
    expect(component.info.emit).toHaveBeenCalledWith(component.note);
  });

  it('should emit an event when the edit button is clicked', () => {
    spyOn(component.edit, 'emit');
    const editButton = fixture.debugElement.queryAll(By.css('button'))[1];
    editButton.triggerEventHandler('click', null);
    expect(component.edit.emit).toHaveBeenCalledWith(component.note);
  });

  it('should emit an event when the delete button is clicked', () => {
    spyOn(component.delete, 'emit');
    const deleteButton = fixture.debugElement.queryAll(By.css('button'))[2];
    deleteButton.triggerEventHandler('click', null);
    expect(component.delete.emit).toHaveBeenCalledWith(component.note);
  });

  it('should emit an event when the complete button is clicked', () => {
    spyOn(component.complete, 'emit');
    const completeButton = fixture.debugElement.queryAll(By.css('button'))[3];
    completeButton.triggerEventHandler('click', null);
    expect(component.complete.emit).toHaveBeenCalledWith(component.note);
  });

  it('should get the correct background color based on priority', () => {
    const tileElement = fixture.debugElement.query(
      By.css('.note-tile')
    ).nativeElement;
    expect(tileElement.style.backgroundColor).toBe('yellow'); // Because the priority set is Medium which should return 'yellow'.
  });
});
