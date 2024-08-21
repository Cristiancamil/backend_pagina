import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorporateDirectoryService } from './corporate-directory.service';
import { CreateCorporateDirectoryDto } from './dto/create-corporate-directory.dto';
import { UpdateCorporateDirectoryDto } from './dto/update-corporate-directory.dto';

@Controller('corporate-directory')
export class CorporateDirectoryController {
  constructor(private readonly corporateDirectoryService: CorporateDirectoryService) {}

  @Post()
  create(@Body() createCorporateDirectoryDto: CreateCorporateDirectoryDto) {
    return this.corporateDirectoryService.create(createCorporateDirectoryDto);
  }

  @Get()
  findAll() {
    return this.corporateDirectoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corporateDirectoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorporateDirectoryDto: UpdateCorporateDirectoryDto) {
    return this.corporateDirectoryService.update(+id, updateCorporateDirectoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corporateDirectoryService.remove(+id);
  }
}
