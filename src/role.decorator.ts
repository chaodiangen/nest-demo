import { SetMetadata } from '@nestjs/common';

export const Role = (...args: string[]) => {
  console.log(1, args);
  return SetMetadata('role', args);
};
