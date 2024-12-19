import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BalanceTransactionServiceBase } from "./base/balanceTransaction.service.base";

@Injectable()
export class BalanceTransactionService extends BalanceTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
