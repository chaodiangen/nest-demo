import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { Role } from 'src/role.decorator';
import { RoleGuard } from 'src/role.guard';

@Controller('user')
@UseGuards(RoleGuard)
export class UserController {
  @Get(':id')
  @SetMetadata('role', ['access'])
  getUserDeatil(@Param('id', new ParseIntPipe()) id: number) {
    return {
      id,
    };
  }
  @Get('user/list')
  @Role('access-0', 'access-1')
  getUserList() {
    return [1, 2, 3, 4];
  }
}
