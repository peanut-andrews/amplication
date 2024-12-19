import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FishBankModuleBase } from "./base/fishBank.module.base";
import { FishBankService } from "./fishBank.service";
import { FishBankController } from "./fishBank.controller";
import { FishBankResolver } from "./fishBank.resolver";

@Module({
  imports: [FishBankModuleBase, forwardRef(() => AuthModule)],
  controllers: [FishBankController],
  providers: [FishBankService, FishBankResolver],
  exports: [FishBankService],
})
export class FishBankModule {}
