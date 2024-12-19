import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameBankServiceBase } from "./base/gameBank.service.base";

@Injectable()
export class GameBankService extends GameBankServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
