import { Module } from '@nestjs/common';
import { ActiviteService } from './activite.service';
import { ActiviteController } from './activite.controller';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { UuidModule } from '../../../Helpers/UUID/uuid.module';

@Module({
  imports: [PrismaModule, UuidModule],
  providers: [ActiviteService],
  controllers: [ActiviteController],
})
export class ActiviteModule {}
