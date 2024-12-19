import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OpenShiftResolverBase } from "./base/openShift.resolver.base";
import { OpenShift } from "./base/OpenShift";
import { OpenShiftService } from "./openShift.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OpenShift)
export class OpenShiftResolver extends OpenShiftResolverBase {
  constructor(
    protected readonly service: OpenShiftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
