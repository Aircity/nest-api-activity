import { Repository } from 'typeorm';
import { Topic } from './topic.entity';
export declare class TopicService {
    private readonly topicRepository;
    constructor(topicRepository: Repository<Topic>);
    findAll(): Promise<Topic[]>;
}
