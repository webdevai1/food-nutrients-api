import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { MongoQuery, MongoQueryModel } from 'nest-mongo-query-parser';

import { CreateCategoryDto } from '../dto/category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiHeader({
    name: 'x-myheader',
    description: 'Custom header',
    required: true,
    schema: {
      type: 'string',
    },
  })
  @Post('/create')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
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
  delete() {
    return this.categoriesService.delete();
  }

  @Get()
  find(
    @MongoQuery({
      search: { key: 'search', paths: ['title'] },
    })
    query: MongoQueryModel,
  ) {
    return this.categoriesService.find(query);
  }
}
