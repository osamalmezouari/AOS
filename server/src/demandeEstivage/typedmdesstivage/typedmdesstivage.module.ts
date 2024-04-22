import { Module } from '@nestjs/common';
import { TypedmdesstivageController } from './typedmdesstivage.controller';
import { TypedmdesstivageService } from './typedmdesstivage.service';

@Module({
  controllers: [TypedmdesstivageController],
  providers: [TypedmdesstivageService],
})
export class TypedmdesstivageModule {}
