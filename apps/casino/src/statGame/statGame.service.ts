import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatGameServiceBase } from "./base/statGame.service.base";

@Injectable()
export class StatGameService extends StatGameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
