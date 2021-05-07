import { Test, TestingModule } from '@nestjs/testing';
import { MealTableController } from './meal-table.controller';

describe('MealTableController', () => {
  let controller: MealTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealTableController],
    }).compile();

    controller = module.get<MealTableController>(MealTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
