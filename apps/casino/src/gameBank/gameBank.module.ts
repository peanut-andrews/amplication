import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameBankModuleBase } from "./base/gameBank.module.base";
import { GameBankService } from "./gameBank.service";
import { GameBankController } from "./gameBank.controller";
import { GameBankResolver } from "./gameBank.resolver";

@Module({
  imports: [GameBankModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameBankController],
  providers: [GameBankService, GameBankResolver],
  exports: [GameBankService],
})
export class GameBankModule {}
