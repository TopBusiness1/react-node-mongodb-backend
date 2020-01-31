import { Module } from '@nestjs/common';
import { MedicalService } from './medical.service';
import { MedicalController } from './medical.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicalSchema } from './medical.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Medical', schema: MedicalSchema }]),
  ],
  providers: [MedicalService],
  controllers: [MedicalController],
})
export class MedicalModule {}
