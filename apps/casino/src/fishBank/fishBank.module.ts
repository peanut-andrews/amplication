import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FishBankModuleBase } from "./base/fishBank.module.base";
import { FishBankService } from "./fishBank.service";
import { FishBankController } from "./fishBank.controller";

@Module({
  imports: [FishBankModuleBase, forwardRef(() => AuthModule)],
  controllers: [FishBankController],
  providers: [FishBankService],
  exports: [FishBankService],
})
export class FishBankModule {}
