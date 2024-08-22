import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class NoticeService {
  constructor(private prismaService: PrismaService) {}

  create(createNoticeDto: CreateNoticeDto) {
    return 'This action adds a new notice';
  }

  findAll() {
    return this.prismaService.news.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} notice`;
  }

  update(id: number, updateNoticeDto: UpdateNoticeDto) {
    return `This action updates a #${id} notice`;
  }

  remove(id: number) {
    return `This action removes a #${id} notice`;
  }
}
