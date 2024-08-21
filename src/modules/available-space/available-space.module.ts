import { Module } from '@nestjs/common';
import { AvailableSpaceService } from './available-space.service';
import { AvailableSpaceController } from './available-space.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [AvailableSpaceController],
  providers: [AvailableSpaceService],
  imports: [PrismaModule],
})
export class AvailableSpaceModule {}
