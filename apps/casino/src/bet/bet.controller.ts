import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BetService } from "./bet.service";
import { BetControllerBase } from "./base/bet.controller.base";

@swagger.ApiTags("bets")
@common.Controller("bets")
export class BetController extends BetControllerBase {
  constructor(
    protected readonly service: BetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
