import { Injectable } from '@nestjs/common';
import { CreateCorporateDirectoryDto } from './dto/create-corporate-directory.dto';
import { UpdateCorporateDirectoryDto } from './dto/update-corporate-directory.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CorporateDirectoryService {

  constructor(
    private prismaService: PrismaService
  ){}


  create(createCorporateDirectoryDto: CreateCorporateDirectoryDto) {
    return 'This action adds a new corporateDirectory';
  }

  findAll() {
    return this.prismaService.corporate_directory.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} corporateDirectory`;
  }

  update(id: number, updateCorporateDirectoryDto: UpdateCorporateDirectoryDto) {
    return `This action updates a #${id} corporateDirectory`;
  }

  remove(id: number) {
    return `This action removes a #${id} corporateDirectory`;
  }
}
