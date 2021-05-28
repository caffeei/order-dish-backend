import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({
  collection: 'orders',
  versionKey: false,
  timestamps: true
})
export class Order extends Document {
  @Prop({
    required: true,
  })
  _id: string;
  @Prop({
    required: true,
  })
  tableId: string;
  @Prop({
    required: true,
  })
  personNum: number;
  @Prop({
    required: true,
  })
  dishAll: object[];
  @Prop({
    required: true,
  })
  totalPrice: number;
  @Prop({
    required: true,
  })
  status: boolean;
  @Prop({
    required: true,
  })
  username: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);