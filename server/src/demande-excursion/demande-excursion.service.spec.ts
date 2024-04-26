import { Test, TestingModule } from '@nestjs/testing';
import { DemandeExcursionService } from './demande-excursion.service';

describe('DemandeExcursionService', () => {
  let service: DemandeExcursionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandeExcursionService],
    }).compile();

    service = module.get<DemandeExcursionService>(DemandeExcursionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
