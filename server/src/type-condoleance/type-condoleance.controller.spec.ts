import { Test, TestingModule } from '@nestjs/testing';
import { TypeCondoleanceController } from './type-condoleance.controller';
import { TypeCondoleanceService } from './type-condoleance.service';

describe('TypeCondoleanceController', () => {
  let controller: TypeCondoleanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeCondoleanceController],
      providers: [TypeCondoleanceService],
    }).compile();

    controller = module.get<TypeCondoleanceController>(TypeCondoleanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
