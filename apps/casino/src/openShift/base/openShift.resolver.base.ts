/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { OpenShift } from "./OpenShift";
import { OpenShiftCountArgs } from "./OpenShiftCountArgs";
import { OpenShiftFindManyArgs } from "./OpenShiftFindManyArgs";
import { OpenShiftFindUniqueArgs } from "./OpenShiftFindUniqueArgs";
import { CreateOpenShiftArgs } from "./CreateOpenShiftArgs";
import { UpdateOpenShiftArgs } from "./UpdateOpenShiftArgs";
import { DeleteOpenShiftArgs } from "./DeleteOpenShiftArgs";
import { Account } from "../../account/base/Account";
import { Shop } from "../../shop/base/Shop";
import { OpenShiftService } from "../openShift.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OpenShift)
export class OpenShiftResolverBase {
  constructor(
    protected readonly service: OpenShiftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "read",
    possession: "any",
  })
  async _openShiftsMeta(
    @graphql.Args() args: OpenShiftCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [OpenShift])
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "read",
    possession: "any",
  })
  async openShifts(
    @graphql.Args() args: OpenShiftFindManyArgs
  ): Promise<OpenShift[]> {
    return this.service.openShifts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => OpenShift, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "read",
    possession: "own",
  })
  async openShift(
    @graphql.Args() args: OpenShiftFindUniqueArgs
  ): Promise<OpenShift | null> {
    const result = await this.service.openShift(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OpenShift)
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "create",
    possession: "any",
  })
  async createOpenShift(
    @graphql.Args() args: CreateOpenShiftArgs
  ): Promise<OpenShift> {
    return await this.service.createOpenShift({
      ...args,
      data: {
        ...args.data,

        cashier: args.data.cashier
          ? {
              connect: args.data.cashier,
            }
          : undefined,

        shop: args.data.shop
          ? {
              connect: args.data.shop,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OpenShift)
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "update",
    possession: "any",
  })
  async updateOpenShift(
    @graphql.Args() args: UpdateOpenShiftArgs
  ): Promise<OpenShift | null> {
    try {
      return await this.service.updateOpenShift({
        ...args,
        data: {
          ...args.data,

          cashier: args.data.cashier
            ? {
                connect: args.data.cashier,
              }
            : undefined,

          shop: args.data.shop
            ? {
                connect: args.data.shop,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => OpenShift)
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "delete",
    possession: "any",
  })
  async deleteOpenShift(
    @graphql.Args() args: DeleteOpenShiftArgs
  ): Promise<OpenShift | null> {
    try {
      return await this.service.deleteOpenShift(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "cashier",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getCashier(
    @graphql.Parent() parent: OpenShift
  ): Promise<Account | null> {
    const result = await this.service.getCashier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Shop, {
    nullable: true,
    name: "shop",
  })
  @nestAccessControl.UseRoles({
    resource: "Shop",
    action: "read",
    possession: "any",
  })
  async getShop(@graphql.Parent() parent: OpenShift): Promise<Shop | null> {
    const result = await this.service.getShop(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}