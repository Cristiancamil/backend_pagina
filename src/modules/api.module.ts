import { AvailableSpaceModule } from './available-space/available-space.module';
import { WeeklyPriceModule } from './weekly-price/weekly-price.module';
import { CorporateDirectoryModule } from './corporate-directory/corporate-directory.module';
import { NoticeModule } from './notice/notice.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        AvailableSpaceModule,
        WeeklyPriceModule,
        CorporateDirectoryModule,
        NoticeModule
    ],
    exports: [AvailableSpaceModule, WeeklyPriceModule, CorporateDirectoryModule, NoticeModule],
    // providers: [
    //   {
    //     provide: APP_GUARD,
    //     useClass: AuthGuard,
    //   },
    // ],
  })
  export class ApiModule {}