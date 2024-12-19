import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BalanceTransactionService } from "./balanceTransaction.service";
import { BalanceTransactionControllerBase } from "./base/balanceTransaction.controller.base";

@swagger.ApiTags("balanceTransactions")
@common.Controller("balanceTransactions")
export class BalanceTransactionController extends BalanceTransactionControllerBase {
  constructor(
    protected readonly service: BalanceTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
