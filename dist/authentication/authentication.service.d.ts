import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashingService } from '../hashing/hashing.service';
export declare class AuthenticationService {
    private readonly usersService;
    private readonly jwtService;
    private readonly hashingService;
    constructor(usersService: UsersService, jwtService: JwtService, hashingService: HashingService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        expires_in: number;
        access_token: string;
    }>;
}
