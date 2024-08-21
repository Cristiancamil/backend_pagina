import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvailableSpaceService } from './available-space.service';
import { CreateAvailableSpaceDto } from './dto/create-available-space.dto';
import { UpdateAvailableSpaceDto } from './dto/update-available-space.dto';

@Controller('available-space')
export class AvailableSpaceController {
  constructor(private readonly availableSpaceService: AvailableSpaceService) {}

  @Post()
  create(@Body() createAvailableSpaceDto: CreateAvailableSpaceDto) {
    return this.availableSpaceService.create(createAvailableSpaceDto);
  }

  @Get()
  findAll() {
    return this.availableSpaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.availableSpaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvailableSpaceDto: UpdateAvailableSpaceDto) {
    return this.availableSpaceService.update(+id, updateAvailableSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.availableSpaceService.remove(+id);
  }
}
