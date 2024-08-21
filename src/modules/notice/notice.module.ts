import { Module } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { NoticeController } from './notice.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [NoticeController],
  providers: [NoticeService],
  imports: [PrismaModule],
})
export class NoticeModule {}
