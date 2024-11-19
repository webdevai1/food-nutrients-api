import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthMiddleware } from './auth/auth.middleware';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { FoodController } from './food/food.controller';
import { FoodModule } from './food/food.module';

@Module({
  imports: [
    FoodModule,
    CategoriesModule,
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'categories', method: RequestMethod.GET },
        {
          path: 'food',
          method: RequestMethod.GET,
        },
      )
      .forRoutes(CategoriesController, FoodController);
  }
}
