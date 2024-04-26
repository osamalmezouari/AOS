import { Test, TestingModule } from '@nestjs/testing';
import { DemandeLangService } from './demande-lang.service';

describe('DemandeLangService', () => {
  let service: DemandeLangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandeLangService],
    }).compile();

    service = module.get<DemandeLangService>(DemandeLangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
