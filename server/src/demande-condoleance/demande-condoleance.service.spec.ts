import { Test, TestingModule } from '@nestjs/testing';
import { DemandeCondoleanceService } from './demande-condoleance.service';

describe('DemandeCondoleanceService', () => {
  let service: DemandeCondoleanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandeCondoleanceService],
    }).compile();

    service = module.get<DemandeCondoleanceService>(DemandeCondoleanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
