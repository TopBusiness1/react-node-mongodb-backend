import { Strategy } from 'passport-local';
import { AuthenticationService } from './authentication.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    validate(email: string, password: string): Promise<any>;
}
export {};
