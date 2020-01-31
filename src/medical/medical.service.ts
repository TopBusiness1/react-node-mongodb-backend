import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Medical } from './interfaces/medical.interface';
import { CreateMedicalDTO } from './dto/create-medical.dto';

@Injectable()
export class MedicalService {
  constructor(
    @InjectModel('Medical') private readonly medicalModel: Model<Medical>,
  ) {}

  // create a medical record
  async createRecord(createMedicalDTO: CreateMedicalDTO): Promise<Medical> {
    const newRecord = new this.medicalModel(createMedicalDTO);
    return await newRecord.save();
  }

  // get all medical records
  async getAllRecords(userId: string): Promise<Medical[]> {
    return await this.medicalModel.find({ user: userId }).exec();
  }

  // get a single record by id
  async getRecordById(recordId: string): Promise<Medical> {
    return await this.medicalModel.findById(recordId).exec();
  }

  // edit record details
  async updateRecord(
    recordId: string,
    createMedicalDTO: CreateMedicalDTO,
  ): Promise<Medical> {
    const updatedRecord = await this.medicalModel.findByIdAndUpdate(
      recordId,
      createMedicalDTO,
      { new: true },
    );
    return updatedRecord;
  }

  // delete a record
  async deleteRecord(recordId): Promise<any> {
    const deletedRecord = await this.medicalModel.findByIdAndRemove(recordId);
    return deletedRecord;
  }
}
