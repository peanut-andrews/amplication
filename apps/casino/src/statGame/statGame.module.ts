import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StatGameModuleBase } from "./base/statGame.module.base";
import { StatGameService } from "./statGame.service";
import { StatGameController } from "./statGame.controller";
import { StatGameResolver } from "./statGame.resolver";

@Module({
  imports: [StatGameModuleBase, forwardRef(() => AuthModule)],
  controllers: [StatGameController],
  providers: [StatGameService, StatGameResolver],
  exports: [StatGameService],
})
export class StatGameModule {}
