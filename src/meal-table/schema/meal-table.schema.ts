import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MealTableDocument = MealTable & Document;

@Schema({
  collection: "mealTables",
  versionKey: false
})
export class MealTable extends Document {
  @Prop()
  _id: string;

  @Prop()
  size: string;

  @Prop()
  status: boolean;
}

export const MealTableSchema = SchemaFactory.createForClass(MealTable);
