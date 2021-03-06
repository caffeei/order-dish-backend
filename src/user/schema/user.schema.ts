import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  collection: 'users',
  versionKey: false,
  timestamps: true
})
export class User extends Document {
  @Prop({
    required: true,
  })
  type: "admin" | "user";
  @Prop({
    required: true,
  })
  _id: string;
  @Prop({
    required: true,
  })
  userId: string;
  @Prop({
    required: true,
  })
  password: string;
  @Prop({
    required: true,
  })
  name: string;
  @Prop({
    required: true,
  })
  phone: string;
  @Prop({
    required: true,
  })
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);