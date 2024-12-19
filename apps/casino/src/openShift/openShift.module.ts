import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OpenShiftModuleBase } from "./base/openShift.module.base";
import { OpenShiftService } from "./openShift.service";
import { OpenShiftController } from "./openShift.controller";

@Module({
  imports: [OpenShiftModuleBase, forwardRef(() => AuthModule)],
  controllers: [OpenShiftController],
  providers: [OpenShiftService],
  exports: [OpenShiftService],
})
export class OpenShiftModule {}
