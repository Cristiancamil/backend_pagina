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
          previous_week_day: String(item.previous_week_day),
          current_weekday: String(item.current_weekday),
          kilogram: String(item.kilogram),
          variation: String(item.variation),
          user_create: 'clopez',
          user_update: 'clopez'
        }
      })
    }
  }

  async findAll() {
    const hoy = new Date();
    const anterior = new Date();
    anterior.setDate(hoy.getDate() - 7);
  
    const formatearFecha = (fecha: Date) => {
      const opc: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
      return fecha.toLocaleDateString('es-ES', opc).replace(' ', '_');
    };
  
    const weeklyPrices = await this.prismaService.weekly_prices.findMany();
  
    return {
      today: formatearFecha(hoy),
      previousday: formatearFecha(anterior),
      weeklyPrices
    };
  }

  async findOne(id: number) {
    const hoy = new Date();
    const anterior = new Date();
    anterior.setDate(hoy.getDate() - 7);
  
    const formatearFecha = (fecha: Date) => {
      const opc: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
      return fecha.toLocaleDateString('es-ES', opc).replace(' ', '_');
    };
  
    const weeklyPrice = await this.prismaService.weekly_prices.findUnique({
      where: { id },
    });
  
    return {
      today: formatearFecha(hoy),
      previousday: formatearFecha(anterior),
      weeklyPrice
    };
  }

  async update(id: number, updateWeeklyPriceDto: UpdateWeeklyPriceDto) {
    const updatedWeeklyPrice = await this.prismaService.weekly_prices.update({
      where: { id: id },
      data: {
        ...updateWeeklyPriceDto,
        user_create: 'clopez',
        user_update: 'clopez'
      }
    })

    return updatedWeeklyPrice;
  }

  remove(id: number) {
    return `This action removes a #${id} weeklyPrice`;
  }
}
