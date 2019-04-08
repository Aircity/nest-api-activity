import { TopicService } from './topic.service';
import { Topic } from './topic.entity';
export declare class TopicController {
    private readonly topicService;
    constructor(topicService: TopicService);
    findAll(): Promise<Topic[]>;
}
