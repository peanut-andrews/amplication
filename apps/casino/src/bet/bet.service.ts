import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BetServiceBase } from "./base/bet.service.base";

@Injectable()
export class BetService extends BetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
