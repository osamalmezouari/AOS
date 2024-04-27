import { Module } from '@nestjs/common';
import { VillesService } from './villes.service';
import { VillesController } from './villes.controller';

@Module({
  imports: [],
  controllers: [VillesController],
  providers: [VillesService],
})
export class VillesModule {}
