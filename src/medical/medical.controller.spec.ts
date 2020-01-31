import { Test, TestingModule } from '@nestjs/testing';
import { MedicalController } from './medical.controller';

describe('Medical Controller', () => {
  let controller: MedicalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalController],
    }).compile();

    controller = module.get<MedicalController>(MedicalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
