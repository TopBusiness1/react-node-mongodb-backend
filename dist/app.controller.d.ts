import { AuthenticationService } from './authentication/authentication.service';
export declare class AppController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    login(req: any): Promise<{
        expires_in: number;
        access_token: string;
    }>;
}
