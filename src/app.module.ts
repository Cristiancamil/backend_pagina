import { Module } from '@nestjs/common';
import { ApiModule } from './modules/api.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
// import { PrismaExceptionFilter } from './common/middleware/catchs/prisma-exception.filter';
// import { ResponseInterceptor } from './common/middleware/response/response.interceptor';
// import { LoggerInterceptor } from './common/middleware/log/log.interceptor';
// import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ApiModule,
  ],
  controllers: [],
  // providers: [
  //   {
  //     provide: APP_FILTER,
  //     useClass: PrismaExceptionFilter,
  //   },
  //   {
  //     provide: APP_INTERCEPTOR,
  //     useClass: ResponseInterceptor,
  //   },
  //   {
  //     provide: APP_INTERCEPTOR,
  //     useClass: LoggerInterceptor,
  //   },
  // ],
})
export class AppModule {}