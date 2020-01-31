import { Strategy } from 'passport-jwt';
import { AuthenticationService } from './authentication.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    validate(payload: any): Promise<{
        _id: any;
        email: any;
    }>;
}
export {};
