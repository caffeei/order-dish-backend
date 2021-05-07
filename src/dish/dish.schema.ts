import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DishDocument = Dish & Document;

@Schema({
  collection: 'dishes',
  versionKey: false,
})
export class Dish extends Document {
  @Prop({
    required: true,
  })
  dishName: string;
  @Prop({
    required: true,
  })
  price: number;
  @Prop({
    required: true,
  })
  status: boolean;
  @Prop()
  imgUrl: string;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
