import { CreateMedicalDTO } from './dto/create-medical.dto';
import { MedicalService } from './medical.service';
import { Medical } from './interfaces/medical.interface';
export declare class MedicalController {
    private medicalService;
    constructor(medicalService: MedicalService);
    createRecord(req: any, createMedicalDTO: CreateMedicalDTO): Promise<Medical>;
    getAllRecords(req: any): Promise<Medical[]>;
    getRecord(id: string): Promise<Medical>;
    updateRecord(recordID: string, createMedicalDTO: CreateMedicalDTO): Promise<Medical>;
    deleteRecord(recordID: string): Promise<any>;
}
