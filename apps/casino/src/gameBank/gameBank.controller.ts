import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameBankService } from "./gameBank.service";
import { GameBankControllerBase } from "./base/gameBank.controller.base";

@swagger.ApiTags("gameBanks")
@common.Controller("gameBanks")
export class GameBankController extends GameBankControllerBase {
  constructor(
    protected readonly service: GameBankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
