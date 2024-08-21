import { Injectable } from '@nestjs/common';
import { CreateAvailableSpaceDto } from './dto/create-available-space.dto';
import { UpdateAvailableSpaceDto } from './dto/update-available-space.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AvailableSpaceService {

  constructor(
    private prismaService: PrismaService
  ){}

  create(createAvailableSpaceDto: CreateAvailableSpaceDto) {
    return 'This action adds a new availableSpace';
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
