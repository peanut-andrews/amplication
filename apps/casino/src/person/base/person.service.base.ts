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
  Person as PrismaPerson,
  Account as PrismaAccount,
  StatGame as PrismaStatGame,
  Message as PrismaMessage,
} from "@prisma/client";

export class PersonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PersonCountArgs, "select">): Promise<number> {
    return this.prisma.person.count(args);
  }

  async people(args: Prisma.PersonFindManyArgs): Promise<PrismaPerson[]> {
    return this.prisma.person.findMany(args);
  }
  async person(
    args: Prisma.PersonFindUniqueArgs
  ): Promise<PrismaPerson | null> {
    return this.prisma.person.findUnique(args);
  }
  async createPerson(args: Prisma.PersonCreateArgs): Promise<PrismaPerson> {
    return this.prisma.person.create(args);
  }
  async updatePerson(args: Prisma.PersonUpdateArgs): Promise<PrismaPerson> {
    return this.prisma.person.update(args);
  }
  async deletePerson(args: Prisma.PersonDeleteArgs): Promise<PrismaPerson> {
    return this.prisma.person.delete(args);
  }

  async findAccounts(
    parentId: string,
    args: Prisma.AccountFindManyArgs
  ): Promise<PrismaAccount[]> {
    return this.prisma.person
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accounts(args);
  }

  async findGameStats(
    parentId: string,
    args: Prisma.StatGameFindManyArgs
  ): Promise<PrismaStatGame[]> {
    return this.prisma.person
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .gameStats(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.person
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }
}