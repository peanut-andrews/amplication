import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoomModuleBase } from "./base/room.module.base";
import { RoomService } from "./room.service";
import { RoomController } from "./room.controller";

@Module({
  imports: [RoomModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
