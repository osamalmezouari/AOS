import { Test, TestingModule } from '@nestjs/testing';
import { DetailsExcursionController } from './details-excursion.controller';
import { DetailsExcursionService } from './details-excursion.service';

describe('DetailsExcursionController', () => {
  let controller: DetailsExcursionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailsExcursionController],
      providers: [DetailsExcursionService],
    }).compile();

    controller = module.get<DetailsExcursionController>(DetailsExcursionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
