import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dtos/create-task-dto';

@Controller('api/tasks')
export class TasksController {
    constructor(private readonly taskService:TasksService) {}

    @UsePipes(new ValidationPipe({transform:true , whitelist:true , forbidNonWhitelisted:true}))
    @Post()
    async create(@Body() task:CreateTaskDTO) {
        console.log(task)
        return await this.taskService.create(task)
    }
}
