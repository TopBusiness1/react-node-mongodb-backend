import { Model } from 'mongoose';
import { Medical } from './interfaces/medical.interface';
import { CreateMedicalDTO } from './dto/create-medical.dto';
export declare class MedicalService {
    private readonly medicalModel;
    constructor(medicalModel: Model<Medical>);
    createRecord(createMedicalDTO: CreateMedicalDTO): Promise<Medical>;
    getAllRecords(userId: string): Promise<Medical[]>;
    getRecordById(recordId: string): Promise<Medical>;
    updateRecord(recordId: string, createMedicalDTO: CreateMedicalDTO): Promise<Medical>;
    deleteRecord(recordId: any): Promise<any>;
}
