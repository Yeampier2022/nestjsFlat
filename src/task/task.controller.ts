import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
    @Get()
    findAll(): string {
        return 'This action returns all tasks';
    }
}
