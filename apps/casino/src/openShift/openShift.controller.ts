import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OpenShiftService } from "./openShift.service";
import { OpenShiftControllerBase } from "./base/openShift.controller.base";

@swagger.ApiTags("openShifts")
@common.Controller("openShifts")
export class OpenShiftController extends OpenShiftControllerBase {
  constructor(
    protected readonly service: OpenShiftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
