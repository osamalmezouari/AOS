import { Test, TestingModule } from '@nestjs/testing';
import { RetraitService } from './retrait.service';

describe('RetraitService', () => {
  let service: RetraitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetraitService],
    }).compile();

    service = module.get<RetraitService>(RetraitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
