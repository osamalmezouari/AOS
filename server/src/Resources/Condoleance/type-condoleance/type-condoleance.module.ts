import { Module } from '@nestjs/common';
import { TypeCondoleanceService } from './type-condoleance.service';
import { TypeCondoleanceController } from './type-condoleance.controller';

@Module({
  imports: [],
  controllers: [TypeCondoleanceController],
  providers: [TypeCondoleanceService],
})
export class TypeCondoleanceModule {}
