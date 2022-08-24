import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catServe: CatService) {}
  @Get()
  findAll(): any {
    return this.catServe.findAll();
  }
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.catServe.findOne(id);
  }
}
