import { TaskStatus } from '../task.entity';

export class createTaskDto {
  title: string;
  description: string;
}

export class updateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
