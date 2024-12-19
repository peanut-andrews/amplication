import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StatisticService } from "./statistic.service";
import { StatisticControllerBase } from "./base/statistic.controller.base";

@swagger.ApiTags("statistics")
@common.Controller("statistics")
export class StatisticController extends StatisticControllerBase {
  constructor(
    protected readonly service: StatisticService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
