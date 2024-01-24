import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';
import { TaskController } from './task/task.controller';

@Module({
  imports: [TasksModule],
  controllers: [TaskController],
  providers: [],
})
export class AppModule {}
