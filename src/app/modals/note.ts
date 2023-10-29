export enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export enum Status {
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
