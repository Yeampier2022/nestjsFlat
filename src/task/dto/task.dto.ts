import { TaskStatus } from '../task.entity';
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class createTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  title: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  description: string;
}

export class updateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status?: TaskStatus;
}
