import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class NoticeService {

  private selectNew: Prisma.newsSelect = {
    id: true,
    title: true,
    date: true,
    resumen: true,
    picture: true,
  };
  constructor(private prismaService: PrismaService) {}

  create(createNoticeDto: CreateNoticeDto) {
    return 'This action adds a new notice';
  }

  findAll() {
    return this.prismaService.news.findMany({
      select: this.selectNew,
    });
  }

  findOne(id: number) {
    return this.prismaService.news.findUnique({
      where: { id },
      select: this.selectNew,
    })
  }

  update(id: number, updateNoticeDto: UpdateNoticeDto) {
    return `This action updates a #${id} notice`;
  }

  remove(id: number) {
    return `This action removes a #${id} notice`;
  }
}
