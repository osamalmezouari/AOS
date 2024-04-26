import { Test, TestingModule } from '@nestjs/testing';
import { ExcursionController } from './excursion.controller';
import { ExcursionService } from './excursion.service';

describe('ExcursionController', () => {
  let controller: ExcursionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcursionController],
      providers: [ExcursionService],
    }).compile();

    controller = module.get<ExcursionController>(ExcursionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
