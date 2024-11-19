import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop({ required: true, unique: true, match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/ })
  slug: string;
  @Prop({ required: true })
  title: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
