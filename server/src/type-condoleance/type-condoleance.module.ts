import { Module } from '@nestjs/common';
import { TypeCondoleanceService } from './type-condoleance.service';
import { TypeCondoleanceController } from './type-condoleance.controller';

@Module({
  controllers: [TypeCondoleanceController],
  providers: [TypeCondoleanceService],
})
export class TypeCondoleanceModule {}
