import { HttpStatus } from '@nestjs/common';

export const statusCode = {
  PrismaClientValidationError: HttpStatus.UNPROCESSABLE_ENTITY,
  PrismaClientKnownRequestError: HttpStatus.BAD_REQUEST,
  PrismaClientRustPanicError: HttpStatus.BAD_REQUEST,
  PrismaClientUnknownRequestError: HttpStatus.BAD_REQUEST,
  PrismaClientInitializationError: HttpStatus.BAD_REQUEST,
};
