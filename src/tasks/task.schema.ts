
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { priority, status } from './enums/tasks.enums';
export type TaskDocument = HydratedDocument<Task>;

@Schema({timestamps:true})
export class Task {
  @Prop({type:String , required:true , minlength:1})
  title: string;

  @Prop({type:String , required:true , minlength:1})
  description: string;

  @Prop({required:true , enum:priority})
  priority: priority;

  @Prop({required:true , enum:status , default:status.NEW})
  status: status;

  @Prop({type:Date , required:true })
  dueDate: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
