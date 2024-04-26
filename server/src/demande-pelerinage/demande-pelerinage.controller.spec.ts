import { Test, TestingModule } from '@nestjs/testing';
import { DemandePelerinageController } from './demande-pelerinage.controller';
import { DemandePelerinageService } from './demande-pelerinage.service';

describe('DemandePelerinageController', () => {
  let controller: DemandePelerinageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandePelerinageController],
      providers: [DemandePelerinageService],
    }).compile();

    controller = module.get<DemandePelerinageController>(DemandePelerinageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
