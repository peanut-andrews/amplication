import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameModuleBase } from "./base/game.module.base";
import { GameService } from "./game.service";
import { GameController } from "./game.controller";

@Module({
  imports: [GameModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameController],
  providers: [GameService],
  exports: [GameService],
})
export class GameModule {}
