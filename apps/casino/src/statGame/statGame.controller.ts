import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StatGameService } from "./statGame.service";
import { StatGameControllerBase } from "./base/statGame.controller.base";

@swagger.ApiTags("statGames")
@common.Controller("statGames")
export class StatGameController extends StatGameControllerBase {
  constructor(
    protected readonly service: StatGameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
