import { Module } from '@nestjs/common';
import { PiecesService } from './pieces.service';
import { PiecesController } from './pieces.controller';

@Module({
  imports: [],
  controllers: [PiecesController],
  providers: [PiecesService],
})
export class PiecesModule {}
