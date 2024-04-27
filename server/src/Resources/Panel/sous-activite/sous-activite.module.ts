import { Module } from '@nestjs/common';
import { SousActiviteService } from './sous-activite.service';
import { SousActiviteController } from './sous-activite.controller';

@Module({
  imports: [],
  providers: [SousActiviteService],
  controllers: [SousActiviteController],
})
export class SousActiviteModule {}
