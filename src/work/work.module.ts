import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [WorkService],
  controllers: [WorkController],
  imports: [HttpModule],
})
export class WorkModule {}
