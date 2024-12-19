import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FishBankServiceBase } from "./base/fishBank.service.base";

@Injectable()
export class FishBankService extends FishBankServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
