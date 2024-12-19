import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatisticServiceBase } from "./base/statistic.service.base";

@Injectable()
export class StatisticService extends StatisticServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
