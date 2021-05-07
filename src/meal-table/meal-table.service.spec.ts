import { Test, TestingModule } from '@nestjs/testing';
import { MealTableService } from './meal-table.service';

describe('MealTableService', () => {
  let service: MealTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealTableService],
    }).compile();

    service = module.get<MealTableService>(MealTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
