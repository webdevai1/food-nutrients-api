import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoQueryModel } from 'nest-mongo-query-parser';

import { CreateCategoryDto } from '../dto/category.dto';
import { Category } from '../schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return await createdCategory.save();
  }

  async delete() {
    return this.categoryModel.deleteMany();
  }

  async find(query: MongoQueryModel) {
    return await this.categoryModel
      .find(query.filter)
      .limit(query.limit)
      .skip(query.skip)
      .sort(query.sort)
      .select(query.select)
      .populate(
        Array.isArray(query.populate)
          ? query.populate.map(({ path }) => ({ path, strictPopulate: false }))
          : query.populate.path,
      )
      .exec();
  }
}
