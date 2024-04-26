import { Test, TestingModule } from '@nestjs/testing';
import { DemandeCondoleanceController } from './demande-condoleance.controller';
import { DemandeCondoleanceService } from './demande-condoleance.service';

describe('DemandeCondoleanceController', () => {
  let controller: DemandeCondoleanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandeCondoleanceController],
      providers: [DemandeCondoleanceService],
    }).compile();

    controller = module.get<DemandeCondoleanceController>(DemandeCondoleanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
