import { Module } from '@nestjs/common';
import { WeeklyPriceService } from './weekly-price.service';
import { WeeklyPriceController } from './weekly-price.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [WeeklyPriceController],
  providers: [WeeklyPriceService],
  imports: [PrismaModule],
})
export class WeeklyPriceModule {}
