import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BalanceTransactionResolverBase } from "./base/balanceTransaction.resolver.base";
import { BalanceTransaction } from "./base/BalanceTransaction";
import { BalanceTransactionService } from "./balanceTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BalanceTransaction)
export class BalanceTransactionResolver extends BalanceTransactionResolverBase {
  constructor(
    protected readonly service: BalanceTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
