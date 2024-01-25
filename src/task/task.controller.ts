import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

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

  @Delete(":id")
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Patch(":id")
  updateTask(@Param('id') id: string, @Body() updateFields: updateTaskDto) {
    return this.taskService.updateTask(id, updateFields);
  }
}
