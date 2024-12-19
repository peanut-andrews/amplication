import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameBankModuleBase } from "./base/gameBank.module.base";
import { GameBankService } from "./gameBank.service";
import { GameBankController } from "./gameBank.controller";

@Module({
  imports: [GameBankModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameBankController],
  providers: [GameBankService],
  exports: [GameBankService],
})
export class GameBankModule {}
