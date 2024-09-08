import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Response } from 'express';
import { statusCode } from 'src/common/constants/status-code.constants';
import { IResponse } from 'src/common/interfaces/response.interface';

@Catch()
export class PrismaExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost) {
    const exeptionName = exception.constructor.name;

    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (statusCode[exeptionName]) {
      const responseBody: IResponse = {
        message: exception.message.match(/[^\n]+$/)[0],
        code: exeptionName,
        status: statusCode[exeptionName] || HttpStatus.INTERNAL_SERVER_ERROR,
      };
      httpAdapter.reply(response, responseBody, responseBody.status);
    } else if (exeptionName === 'TypeError') {
      const responseBody: IResponse = {
        message: (exception as any).message,
        code: 'TypeError',
        status: 500,
      };
      httpAdapter.reply(response, responseBody, responseBody.status);
    } else {
      const responseBody: IResponse = {
        message: (exception as any).response?.message ?? exception.message,
        code: (exception as any).response?.error ?? 'Internal Error',
        status: (exception as any).status ?? 500,
      };
      httpAdapter.reply(response, responseBody, responseBody.status);
    }
  }
}
