import { Test, TestingModule } from '@nestjs/testing';
import { DemandeLangController } from './demande-lang.controller';
import { DemandeLangService } from './demande-lang.service';

describe('DemandeLangController', () => {
  let controller: DemandeLangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandeLangController],
      providers: [DemandeLangService],
    }).compile();

    controller = module.get<DemandeLangController>(DemandeLangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
