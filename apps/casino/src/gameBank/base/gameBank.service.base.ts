/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  GameBank as PrismaGameBank,
  Shop as PrismaShop,
} from "@prisma/client";

export class GameBankServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GameBankCountArgs, "select">): Promise<number> {
    return this.prisma.gameBank.count(args);
  }

  async gameBanks(
    args: Prisma.GameBankFindManyArgs
  ): Promise<PrismaGameBank[]> {
    return this.prisma.gameBank.findMany(args);
  }
  async gameBank(
    args: Prisma.GameBankFindUniqueArgs
  ): Promise<PrismaGameBank | null> {
    return this.prisma.gameBank.findUnique(args);
  }
  async createGameBank(
    args: Prisma.GameBankCreateArgs
  ): Promise<PrismaGameBank> {
    return this.prisma.gameBank.create(args);
  }
  async updateGameBank(
    args: Prisma.GameBankUpdateArgs
  ): Promise<PrismaGameBank> {
    return this.prisma.gameBank.update(args);
  }
  async deleteGameBank(
    args: Prisma.GameBankDeleteArgs
  ): Promise<PrismaGameBank> {
    return this.prisma.gameBank.delete(args);
  }

  async getShop(parentId: string): Promise<PrismaShop | null> {
    return this.prisma.gameBank
      .findUnique({
        where: { id: parentId },
      })
      .shop();
  }
}
