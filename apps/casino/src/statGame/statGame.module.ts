import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StatGameModuleBase } from "./base/statGame.module.base";
import { StatGameService } from "./statGame.service";
import { StatGameController } from "./statGame.controller";

@Module({
  imports: [StatGameModuleBase, forwardRef(() => AuthModule)],
  controllers: [StatGameController],
  providers: [StatGameService],
  exports: [StatGameService],
})
export class StatGameModule {}
