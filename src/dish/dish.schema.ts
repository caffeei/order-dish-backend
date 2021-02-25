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
  name: string;
  @Prop({
    required: true,
  })
  price: number;
  @Prop({
    required: true,
  })
  state: boolean;
  @Prop()
  imgUrl: string;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
