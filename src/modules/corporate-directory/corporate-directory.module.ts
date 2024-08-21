import { Module } from '@nestjs/common';
import { CorporateDirectoryService } from './corporate-directory.service';
import { CorporateDirectoryController } from './corporate-directory.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [CorporateDirectoryController],
  providers: [CorporateDirectoryService],
  imports: [PrismaModule],
})
export class CorporateDirectoryModule {}
