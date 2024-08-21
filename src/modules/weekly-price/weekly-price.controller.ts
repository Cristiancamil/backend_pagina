import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { WeeklyPriceService } from './weekly-price.service';
import { CreateWeeklyPriceDto } from './dto/create-weekly-price.dto';
import { UpdateWeeklyPriceDto } from './dto/update-weekly-price.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'

@Controller('weekly-price')
export class WeeklyPriceController {
  constructor(private readonly weeklyPriceService: WeeklyPriceService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const data = this.weeklyPriceService.parserExcel(file)
    await this.weeklyPriceService.saveToDatabase(data)
    return { message: 'Información subida con exito' }
  }

  @Get()
  findAll() {
    return this.weeklyPriceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weeklyPriceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeeklyPriceDto: UpdateWeeklyPriceDto) {
    return this.weeklyPriceService.update(+id, updateWeeklyPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weeklyPriceService.remove(+id);
  }
}
