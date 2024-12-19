/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, OpenShift as PrismaOpenShift } from "@prisma/client";

export class OpenShiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OpenShiftCountArgs, "select">
  ): Promise<number> {
    return this.prisma.openShift.count(args);
  }

  async openShifts(
    args: Prisma.OpenShiftFindManyArgs
  ): Promise<PrismaOpenShift[]> {
    return this.prisma.openShift.findMany(args);
  }
  async openShift(
    args: Prisma.OpenShiftFindUniqueArgs
  ): Promise<PrismaOpenShift | null> {
    return this.prisma.openShift.findUnique(args);
  }
  async createOpenShift(
    args: Prisma.OpenShiftCreateArgs
  ): Promise<PrismaOpenShift> {
    return this.prisma.openShift.create(args);
  }
  async updateOpenShift(
    args: Prisma.OpenShiftUpdateArgs
  ): Promise<PrismaOpenShift> {
    return this.prisma.openShift.update(args);
  }
  async deleteOpenShift(
    args: Prisma.OpenShiftDeleteArgs
  ): Promise<PrismaOpenShift> {
    return this.prisma.openShift.delete(args);
  }
}