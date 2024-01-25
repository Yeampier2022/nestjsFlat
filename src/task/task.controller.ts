import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { createTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  getAllTask() {
    return this.taskService.getAllTask();
  }
  @Post()
  createTask(@Body() newTask: createTaskDto) {
    return this.taskService.createTask(newTask.title, newTask.description);
  }
}
