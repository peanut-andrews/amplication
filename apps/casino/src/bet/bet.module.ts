import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BetModuleBase } from "./base/bet.module.base";
import { BetService } from "./bet.service";
import { BetController } from "./bet.controller";
import { BetResolver } from "./bet.resolver";

@Module({
  imports: [BetModuleBase, forwardRef(() => AuthModule)],
  controllers: [BetController],
  providers: [BetService, BetResolver],
  exports: [BetService],
})
export class BetModule {}
