import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(id: string): void;
    findOne(id: string): Promise<any>;
    findAll(): Promise<User[]>;
    query(category: string): Promise<any>;
    update(id: string, user: User): Promise<User>;
}
