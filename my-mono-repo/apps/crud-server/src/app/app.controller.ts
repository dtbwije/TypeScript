import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('photo-service')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  getData(@Query('username') username: string): { message: string } {
    console.log(`Username received: ${username}`);
    return this.appService.getData();
  }
}
