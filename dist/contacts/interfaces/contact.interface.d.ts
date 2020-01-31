import { Document } from 'mongoose';
export interface Contact extends Document {
    readonly name: object;
    readonly company: object;
    readonly address: any[];
    readonly phone: any[];
    readonly biography: object;
    readonly marketing: object;
    readonly notes: string;
    readonly contactType: string;
    readonly createdBy: string;
    readonly user: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
