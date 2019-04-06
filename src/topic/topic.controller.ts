import { Controller, Get } from '@nestjs/common';
import { TopicService } from './topic.service';
import { Topic } from './topic.entity';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get()
  findAll(): Promise<Topic[]> {
    return this.topicService.findAll();
  }
}
