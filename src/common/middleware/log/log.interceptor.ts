import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logger: Logger = new Logger('Request');
    const [args] = context.getArgs();

    return next.handle().pipe(
      tap(() => {
        logger.log(`${args.method} - ${args.url} - 200`);
      }),
      catchError(error => {
        console.log(error);

        logger.error(`${args.method} - ${args.url} - ${error.status}`);
        return throwError(() => error);
      }),
    );
  }
}
