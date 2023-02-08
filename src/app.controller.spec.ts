import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe('Hello World');
    });
  });

  describe('addition', () => {
    it('should return correct sum', () => {
      const appController = app.get(AppController);
      const result = appController.getProperBug(8, 5, '+');
      expect(result).toBe(13);
    });
  });

  describe('subtraction', () => {
    it('should return correct subtraction', () => {
      const appController = app.get(AppController);
      const result = appController.getProperBug(8, 5, '-');
      expect(result).toBe(3);
    });
  });

  describe('multiplication', () => {
    it('should return correct multiplication', () => {
      const appController = app.get(AppController);
      const result = appController.getProperBug(8, 5, '*');
      expect(result).toBe(40);
    });
  });

  describe('division', () => {
    it('should return correct division', () => {
      const appController = app.get(AppController);
      const result = appController.getProperBug(8, 4, '/');
      expect(result).toBe(2);
    });
  });
});
