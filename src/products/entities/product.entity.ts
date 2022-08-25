import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'sequelize-typescript';

export class Product {
  @ApiProperty({
    description: '名字',
  })
  @Column
  keywords: string;

  @Column
  @ApiProperty({
    description: '名字',
  })
  name: string;
}
