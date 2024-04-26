import { Module } from '@nestjs/common';
import { VillesService } from './villes.service';
import { VillesController } from './villes.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VillesController],
  providers: [VillesService],
})
export class VillesModule {}
