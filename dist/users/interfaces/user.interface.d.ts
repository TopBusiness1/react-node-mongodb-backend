import { Document } from 'mongoose';
export interface User extends Document {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly isActive: boolean;
    readonly userType: number;
}
