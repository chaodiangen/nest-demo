import { Get, Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

@Module({
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {
  constructor(private readonly catServe: CatService) {}
}
