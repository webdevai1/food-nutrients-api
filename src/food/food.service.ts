import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoQueryModel } from 'nest-mongo-query-parser';
import { CreateFoodDto } from 'src/dto/food.dto';
import { Food } from 'src/schemas/food.schema';

@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<Food>) {}
  async create(createFoodDto: CreateFoodDto) {
    const createdFood = new this.foodModel(createFoodDto);
    return await createdFood.save();
  }

  async delete(categoryId: string) {
    await this.foodModel.deleteMany({ category: categoryId });
  }

  async find(query: MongoQueryModel) {
    console.log(JSON.stringify(query));
    return this.foodModel
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
