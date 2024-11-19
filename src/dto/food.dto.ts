import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class CreateFoodDto {
  @ApiProperty({
    description: 'Amount of calories in the food item',
    example: 250,
  })
  calories: number;

  @ApiProperty({
    description:
      'Amount of carbohydrates in the food item, or "t" for trace amounts',
    example: 30,
  })
  carb: number | 't';

  @ApiProperty({
    description: "MongoDB's category ObjectId that this food item belongs to",
    type: String,
    example: '60c72b2f9f1b14632aef4b27',
  })
  category: ObjectId;

  @ApiProperty({
    description: 'Amount of fat in the food item, or "t" for trace amounts',
    example: 10,
  })
  fat: number | 't';

  @ApiProperty({
    description: 'Amount of fiber in the food item, or "t" for trace amounts',
    example: 5,
  })
  fiber: number | 't';

  @ApiProperty({
    description: 'Total weight of the food item in grams',
    example: 100,
  })
  grams: number;

  @ApiProperty({
    description:
      'Unit of measurement for the food item (e.g., cup, piece, slice)',
    example: 'cup',
  })
  measure: string;

  @ApiProperty({
    description: 'Amount of protein in the food item, or "t" for trace amounts',
    example: 20,
  })
  protein: number | 't';

  @ApiProperty({
    description:
      'Amount of saturated fat in the food item, or "t" for trace amounts',
    example: 2,
  })
  satFat: number | 't';

  @ApiProperty({
    description: 'Slugified version of the title for URL use',
    example: 'grilled-chicken',
  })
  slug: string;

  @ApiProperty({
    description: 'The title or name of the food item',
    example: 'Grilled Chicken',
  })
  title: string;
}
