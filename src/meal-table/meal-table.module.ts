import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealTable, MealTableSchema } from './schema/meal-table.schema';
import { MealTableController } from './meal-table.controller';
import { MealTableService } from './meal-table.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: MealTable.name, schema: MealTableSchema}])
  ],
  controllers: [MealTableController],
  providers: [MealTableService]
})
export class MealTableModule {}
