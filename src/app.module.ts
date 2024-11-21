import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule , ConfigService } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }) , TasksModule , MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>(`MONGO_STRING`),
    }),
    inject: [ConfigService],
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
