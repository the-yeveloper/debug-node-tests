import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getProperBug(num1: number, num2: number, operation: string): number {
    return this.appService.doMath(num1, num2, operation);
  }
}
