import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishModule } from './dish/dish.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MealTableController } from './meal-table/meal-table.controller';
import { MealTableModule } from './meal-table/meal-table.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    DishModule,
    MealTableModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
