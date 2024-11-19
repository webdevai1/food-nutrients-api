import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Slugified version of the category title for URL usage',
    example: 'vegetables',
  })
  slug: string;

  @ApiProperty({
    description: 'The name or title of the category',
    example: 'Vegetables',
  })
  title: string;
}
