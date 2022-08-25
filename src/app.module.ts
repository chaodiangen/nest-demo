import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './logger.middleware';
import { UserController } from './user/user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { User } from './users/user.model';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    CatModule,
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'trs@admin',
      database: 'nest_export',
      models: [User],
    }),
    ProductsModule,
  ],
  controllers: [AppController, UserController, UsersController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('v1');
  }
}
