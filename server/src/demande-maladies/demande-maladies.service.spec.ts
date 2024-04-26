import { Test, TestingModule } from '@nestjs/testing';
import { DemandeMaladiesService } from './demande-maladies.service';

describe('DemandeMaladiesService', () => {
  let service: DemandeMaladiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandeMaladiesService],
    }).compile();

    service = module.get<DemandeMaladiesService>(DemandeMaladiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
