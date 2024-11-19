import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { CategoryDocument } from './category.schema';

export type FoodDocument = HydratedDocument<Food>;

@Schema()
export class Food {
  @Prop({ required: true })
  calories: number;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: (v) => typeof v === 'number' || v === 't',
      message: (props) => `${props.value} is not a valid carbohydrate value!`,
    },
  })
  carb: number | 't';

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  category: CategoryDocument;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: (v) => typeof v === 'number' || v === 't',
      message: (props) => `${props.value} is not a valid fat value!`,
    },
  })
  fat: number | 't';

  @Prop({
    required: true,
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: (v) => typeof v === 'number' || v === 't',
      message: (props) => `${props.value} is not a valid fat value!`,
    },
  })
  fiber: number | 't';

  @Prop({ required: true })
  grams: number;

  @Prop({ required: true })
  measure: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: (v) => typeof v === 'number' || v === 't',
      message: (props) => `${props.value} is not a valid protein value!`,
    },
  })
  protein: number | 't';

  @Prop({
    required: true,
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: (v) => typeof v === 'number' || v === 't',
      message: (props) => `${props.value} is not a valid saturated fat value!`,
    },
  })
  satFat: number | 't';

  @Prop({
    required: true,
    unique: true,
    match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  })
  slug: string;

  @Prop({ required: true })
  title: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
