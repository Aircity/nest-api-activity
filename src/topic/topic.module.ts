import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Topic])],
  providers: [TopicService],
  controllers: [TopicController],
})
export class TopicModule {}
