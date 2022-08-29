import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ? Basic rest still works
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
