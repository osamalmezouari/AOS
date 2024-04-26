import { Test, TestingModule } from '@nestjs/testing';
import { DemandeExcursionController } from './demande-excursion.controller';
import { DemandeExcursionService } from './demande-excursion.service';

describe('DemandeExcursionController', () => {
  let controller: DemandeExcursionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandeExcursionController],
      providers: [DemandeExcursionService],
    }).compile();

    controller = module.get<DemandeExcursionController>(DemandeExcursionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
