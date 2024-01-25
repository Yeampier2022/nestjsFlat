export enum TaskStatus {
  OPEN = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  PENDING = "PENDING"
}
 export class Task {
  id: string;
  title: string;
  descripcion: string;
  status: TaskStatus;
}


