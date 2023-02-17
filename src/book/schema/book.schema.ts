import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from '../dto/category.interface';

@Schema({ timestamps: true })
export class Book {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ type: String })
  description: number;

  @Prop({ required: true, type: String })
  author: string;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ require: true })
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);
