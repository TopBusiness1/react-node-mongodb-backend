export declare class HashingService {
    hash(pass: string): Promise<string>;
    compare(newPass: string, oldPass: string): Promise<boolean>;
}
