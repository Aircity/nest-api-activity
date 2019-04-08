import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findOne(id: string): any;
    findAll(): Promise<User[]>;
    query(category: string): Promise<any>;
    create(data: any): void;
    update(id: string, user: User): Promise<User>;
}
