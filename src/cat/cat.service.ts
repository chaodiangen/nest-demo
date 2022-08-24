import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  findAll() {
    return ` fuck cat`;
  }
  findOne(id) {
    return `this is one ${id}`;
  }
}
