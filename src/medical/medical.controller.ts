import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Request,
  UseGuards,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMedicalDTO } from './dto/create-medical.dto';
import { MedicalService } from './medical.service';
import { Medical } from './interfaces/medical.interface';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiTags('medical')
@Controller('medical')
export class MedicalController {
  constructor(private medicalService: MedicalService) {}

  // create a medical record
  @Post()
  async createRecord(
    @Request() req,
    @Body() createMedicalDTO: CreateMedicalDTO,
  ): Promise<Medical> {
    const userId = req.user._id;
    const newAttr = {
      ...createMedicalDTO,
      createdBy: userId,
      user: userId,
    };
    return await this.medicalService.createRecord(newAttr);
  }

  // get all records
  @Get()
  async getAllRecords(@Request() req): Promise<Medical[]> {
    const userId = req.user._id;
    return await this.medicalService.getAllRecords(userId);
  }

  // get a single record
  @Get(':id')
  async getRecord(@Param('id') id: string): Promise<Medical> {
    return await this.medicalService.getRecordById(id);
  }

  // edit a record
  @Put(':recordID')
  async updateRecord(
    @Param('recordID') recordID: string,
    @Body() createMedicalDTO: CreateMedicalDTO,
  ): Promise<Medical> {
    const rec = await this.medicalService.updateRecord(
      recordID,
      createMedicalDTO,
    );
    if (!rec) throw new NotFoundException('Record does not exist!');
    return rec;
  }

  // delete a record
  @Delete(':recordID')
  async deleteRecord(@Param('recordID') recordID: string): Promise<any> {
    const rec = await this.medicalService.deleteRecord(recordID);
    if (!rec) throw new NotFoundException('Record does not exist!');
    return rec;
  }
}
