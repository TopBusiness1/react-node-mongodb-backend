import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private readonly usersService;
    private readonly logger;
    constructor(usersService: UsersService);
    createUser(createUserDTO: CreateUserDTO): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
    updateRecord(req: any): Promise<User>;
    getProfile(req: any): any;
}
