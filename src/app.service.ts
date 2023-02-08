import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  doMath(num1: number, num2: number, operation: string ): number {

    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num2 - num1;
      case '*':
        throw new Error('not implemented');
      default:
        break;
    }

    return 0;
  }
}
