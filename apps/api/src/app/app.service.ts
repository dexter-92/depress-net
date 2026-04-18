import { PrismaService } from '@depress-net/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getData() {
    return this.prisma.user.findMany({});
  }
}
