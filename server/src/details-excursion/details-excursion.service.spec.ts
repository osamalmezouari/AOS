import { Test, TestingModule } from '@nestjs/testing';
import { DetailsExcursionService } from './details-excursion.service';

describe('DetailsExcursionService', () => {
  let service: DetailsExcursionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsExcursionService],
    }).compile();

    service = module.get<DetailsExcursionService>(DetailsExcursionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
