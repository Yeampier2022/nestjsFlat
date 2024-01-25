import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';


@Module({
  imports: [TasksModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
