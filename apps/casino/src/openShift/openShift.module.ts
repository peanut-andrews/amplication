import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OpenShiftModuleBase } from "./base/openShift.module.base";
import { OpenShiftService } from "./openShift.service";
import { OpenShiftController } from "./openShift.controller";
import { OpenShiftResolver } from "./openShift.resolver";

@Module({
  imports: [OpenShiftModuleBase, forwardRef(() => AuthModule)],
  controllers: [OpenShiftController],
  providers: [OpenShiftService, OpenShiftResolver],
  exports: [OpenShiftService],
})
export class OpenShiftModule {}
