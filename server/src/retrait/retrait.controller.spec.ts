import { Test, TestingModule } from '@nestjs/testing';
import { RetraitController } from './retrait.controller';
import { RetraitService } from './retrait.service';

describe('RetraitController', () => {
  let controller: RetraitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetraitController],
      providers: [RetraitService],
    }).compile();

    controller = module.get<RetraitController>(RetraitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
