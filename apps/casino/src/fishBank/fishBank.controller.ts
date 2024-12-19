import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FishBankService } from "./fishBank.service";
import { FishBankControllerBase } from "./base/fishBank.controller.base";

@swagger.ApiTags("fishBanks")
@common.Controller("fishBanks")
export class FishBankController extends FishBankControllerBase {
  constructor(
    protected readonly service: FishBankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
