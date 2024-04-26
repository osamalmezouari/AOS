import { Test, TestingModule } from '@nestjs/testing';
import { DemandeCreditController } from './demande-credit.controller';
import { DemandeCreditService } from './demande-credit.service';

describe('DemandeCreditController', () => {
  let controller: DemandeCreditController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandeCreditController],
      providers: [DemandeCreditService],
    }).compile();

    controller = module.get<DemandeCreditController>(DemandeCreditController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
