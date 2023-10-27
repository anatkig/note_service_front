# NoteServiceFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Development plan

# Step 1: Set Up the Project
Create a new repository on GitHub for your project.
Continuously update your repository with pull requests or commits as you develop the application.
# Step 2: Application Structure
Homepage:
Display a list of notes as rectangular blocks.
Each note should have a background color based on its priority.
Within each note block, there should be icons/buttons for deleting, editing, and marking the note as completed.
Clicking on a note block opens a modal with detailed information.
Above the list, there should be a '+' icon/button for adding a new note.
# Step 3: CRUD Operations
Deleting a Note:

Clicking the delete button will open a confirmation modal.
The modal should have "Cancel" and "OK" buttons.
Confirming the delete action will remove the note and refresh the list.
Editing a Note:

Clicking the edit button will open a new page/modal with a form populated with the note's data.
The form should have "Cancel" and "OK" buttons to discard or confirm edits respectively.
After confirming edits, the user is redirected to the updated notes list.
Marking a Note as Complete:

Clicking the complete button will strike-through the note text and change the note's background color to grey.
Adding a Note:

Clicking the '+' button opens a form on a new page/modal.
After adding a new note, the user is redirected to the updated notes list.
# Step 4: Note Model
The Note model should have the following properties: id, title, description, priority, and status.
Implement priority and status as enumerations (enums).
# Step 5: Application Features
Angular Material Design:

Install the Angular Material Design SDK: Getting Started with Angular Material
Use components from Angular Material Components
Forms:

Use form group and form builder when working with input fields.
Ensure form fields are validated (non-empty and minimum length of 3 characters).
Implement task status as a checkbox and task priority as a dropdown with options: low/medium/high.
Note blocks' background colors: green (low), yellow (medium), and red (high).
