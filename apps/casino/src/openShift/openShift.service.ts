import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OpenShiftServiceBase } from "./base/openShift.service.base";

@Injectable()
export class OpenShiftService extends OpenShiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
