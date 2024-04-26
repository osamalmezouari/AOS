import { Module } from '@nestjs/common';
import { SousActiviteService } from './sous-activite.service';
import { SousActiviteController } from './sous-activite.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SousActiviteService],
  controllers: [SousActiviteController],
})
export class SousActiviteModule {}
