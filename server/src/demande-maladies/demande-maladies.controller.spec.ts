import { Test, TestingModule } from '@nestjs/testing';
import { DemandeMaladiesController } from './demande-maladies.controller';
import { DemandeMaladiesService } from './demande-maladies.service';

describe('DemandeMaladiesController', () => {
  let controller: DemandeMaladiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandeMaladiesController],
      providers: [DemandeMaladiesService],
    }).compile();

    controller = module.get<DemandeMaladiesController>(DemandeMaladiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
