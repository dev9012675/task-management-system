import { Injectable  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.schema';
import { Model } from 'mongoose';
import { CreateTaskDTO } from './dtos/create-task-dto';

@Injectable()
export class TasksService {
   constructor(@InjectModel(Task.name) private taskModel:Model<Task>){}

   async create(task:CreateTaskDTO) {
       await this.taskModel.create(task)
       return {message:"Task created successfully"}
   }
}
