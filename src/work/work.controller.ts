import { Controller, Get, Query } from '@nestjs/common';
import { WorkService } from './work.service';

@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get('getVenderToken')
  getVenderToken() {
    return this.workService.getVenderToken();
  }

  @Get('getOrderByOrderIdsProd')
  getOrderByOrderIdsProd(@Query('orderIds') orderIds: number[]) {
    return this.workService.getOrderByOrderIdsProd(orderIds);
  }
}
