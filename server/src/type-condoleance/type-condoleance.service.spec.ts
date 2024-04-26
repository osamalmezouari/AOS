import { Test, TestingModule } from '@nestjs/testing';
import { TypeCondoleanceService } from './type-condoleance.service';

describe('TypeCondoleanceService', () => {
  let service: TypeCondoleanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeCondoleanceService],
    }).compile();

    service = module.get<TypeCondoleanceService>(TypeCondoleanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
