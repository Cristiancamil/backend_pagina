import { Injectable } from '@nestjs/common';
import { CreateAvailableSpaceDto } from './dto/create-available-space.dto';
import { UpdateAvailableSpaceDto } from './dto/update-available-space.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as XLSX from 'xlsx';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AvailableSpaceService {

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
      const dto = plainToInstance(CreateAvailableSpaceDto, item)

      await this.prismaService.spaces_availables.create({
        data: {
          ...item,
          store: String(item.store),
          local: String(item.local), 
          area_m2: String(item.area_m2),
          sector: String(item.sector), 
          user_create: 'clopez',
          user_update: 'clopez'
        }
      })
    }
  }

  findAll() {
    return this.prismaService.spaces_availables.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} availableSpace`;
  }

  update(id: number, updateAvailableSpaceDto: UpdateAvailableSpaceDto) {
    return `This action updates a #${id} availableSpace`;
  }

  remove(id: number) {
    return `This action removes a #${id} availableSpace`;
  }
}
