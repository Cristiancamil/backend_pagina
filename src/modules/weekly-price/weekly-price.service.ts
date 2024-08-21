import { Injectable } from '@nestjs/common';
import { CreateWeeklyPriceDto } from './dto/create-weekly-price.dto';
import { UpdateWeeklyPriceDto } from './dto/update-weekly-price.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as XLSX from 'xlsx';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class WeeklyPriceService {

  constructor(
    private prismaService: PrismaService
  ){}

  parserExcel(file: Express.Multer.File): any[] {
    const workbook = XLSX.read(file.buffer, { type: 'buffer'})
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(worksheet)
    return data
  }

  async saveToDatabase(data: any[]): Promise<void> {
    for (const item of data) {
      const dto = plainToInstance(CreateWeeklyPriceDto, item)

      await this.prismaService.weekly_prices.create({
        data: {
          ...item,
          marketOne: String(item.marketOne),
          marketTwo: String(item.marketOne),
          marketThree: String(item.marketOne),
          kilogram: String(item.kilogram),
          variation: String(item.variation),
          user_create: 'clopez',
          user_update: 'clopez'
        }
      })
    }
  }

  findAll() {
    return this.prismaService.weekly_prices.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} weeklyPrice`;
  }

  update(id: number, updateWeeklyPriceDto: UpdateWeeklyPriceDto) {
    return `This action updates a #${id} weeklyPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} weeklyPrice`;
  }
}
