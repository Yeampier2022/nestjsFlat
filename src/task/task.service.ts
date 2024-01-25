import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TaskService {
  private task: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      descripcion: 'Task 1 description',
      status: TaskStatus.PENDING,
    },
    {
      id: '2',
      title: 'Task 2',
      descripcion: 'Task 2 description',
      status: TaskStatus.PENDING,
    },
    {
      id: '3',
      title: 'Task 3',
      descripcion: 'Task 3 description',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTask() {
    return this.task;
  }
  createTask(title: string, description: string) {
    const task: Task = {
      id: v4(),
      title,
      descripcion: description,
      status: TaskStatus.PENDING,
    };

    this.task.push(task);
    return task;
  }

}
