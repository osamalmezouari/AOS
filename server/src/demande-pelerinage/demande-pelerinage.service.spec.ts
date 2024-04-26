import { Test, TestingModule } from '@nestjs/testing';
import { DemandePelerinageService } from './demande-pelerinage.service';

describe('DemandePelerinageService', () => {
  let service: DemandePelerinageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandePelerinageService],
    }).compile();

    service = module.get<DemandePelerinageService>(DemandePelerinageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
