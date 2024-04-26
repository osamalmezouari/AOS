import { Test, TestingModule } from '@nestjs/testing';
import { DemandeCreditService } from './demande-credit.service';

describe('DemandeCreditService', () => {
  let service: DemandeCreditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandeCreditService],
    }).compile();

    service = module.get<DemandeCreditService>(DemandeCreditService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
