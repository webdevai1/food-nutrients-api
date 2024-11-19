import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { MongoQuery, MongoQueryModel } from 'nest-mongo-query-parser';
import { CreateFoodDto } from 'src/dto/food.dto';

import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private foodService: FoodService) {}

  @ApiHeader({
    name: 'x-myheader',
    description: 'Custom header',
    required: true,
    schema: {
      type: 'string',
    },
  })
  @Post('/create')
  async create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.create(createFoodDto);
  }

  @ApiHeader({
    name: 'x-myheader',
    description: 'Custom header',
    required: true,
    schema: {
      type: 'string',
    },
  })
  @Delete('/delete')
  async delete(@Body() data: { categoryId: string }) {
    return this.foodService.delete(data.categoryId);
  }

  @Get()
  async find(
    @MongoQuery({
      search: { key: 'search', paths: ['title'] },
    })
    query: MongoQueryModel,
  ) {
    return this.foodService.find(query);
  }
}
