import { Module } from '@nestjs/common';
import { SousActivitesController } from './sous-activites.controller';
import { SousActivitesService } from './sous-activites.service';

@Module({
  controllers: [SousActivitesController],
  providers: [SousActivitesService]
})
export class SousActivitesModule {}
