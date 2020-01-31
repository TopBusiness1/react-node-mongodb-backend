import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { HashingService } from '../hashing/hashing.service';
export declare class UsersService {
    private readonly userModel;
    private readonly hashingService;
    private readonly logger;
    constructor(userModel: Model<User>, hashingService: HashingService);
    getAllUsers(): Promise<User[]>;
    getUserById(userID: number): Promise<User>;
    createUser(createUserDTO: CreateUserDTO): Promise<User>;
    updateUser(userID: number, createUserDTO: CreateUserDTO): Promise<User>;
    deleteCustomer(userID: number): Promise<any>;
    getUserByEmail(email: string): Promise<User>;
}
