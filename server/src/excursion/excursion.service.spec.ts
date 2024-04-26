import { Test, TestingModule } from '@nestjs/testing';
import { ExcursionService } from './excursion.service';

describe('ExcursionService', () => {
  let service: ExcursionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcursionService],
    }).compile();

    service = module.get<ExcursionService>(ExcursionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
