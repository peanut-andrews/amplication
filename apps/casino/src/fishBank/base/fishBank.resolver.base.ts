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
import { FishBank } from "./FishBank";
import { FishBankCountArgs } from "./FishBankCountArgs";
import { FishBankFindManyArgs } from "./FishBankFindManyArgs";
import { FishBankFindUniqueArgs } from "./FishBankFindUniqueArgs";
import { CreateFishBankArgs } from "./CreateFishBankArgs";
import { UpdateFishBankArgs } from "./UpdateFishBankArgs";
import { DeleteFishBankArgs } from "./DeleteFishBankArgs";
import { Shop } from "../../shop/base/Shop";
import { FishBankService } from "../fishBank.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FishBank)
export class FishBankResolverBase {
  constructor(
    protected readonly service: FishBankService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "read",
    possession: "any",
  })
  async _fishBanksMeta(
    @graphql.Args() args: FishBankCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FishBank])
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "read",
    possession: "any",
  })
  async fishBanks(
    @graphql.Args() args: FishBankFindManyArgs
  ): Promise<FishBank[]> {
    return this.service.fishBanks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FishBank, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "read",
    possession: "own",
  })
  async fishBank(
    @graphql.Args() args: FishBankFindUniqueArgs
  ): Promise<FishBank | null> {
    const result = await this.service.fishBank(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FishBank)
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "create",
    possession: "any",
  })
  async createFishBank(
    @graphql.Args() args: CreateFishBankArgs
  ): Promise<FishBank> {
    return await this.service.createFishBank({
      ...args,
      data: {
        ...args.data,

        shop: {
          connect: args.data.shop,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FishBank)
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "update",
    possession: "any",
  })
  async updateFishBank(
    @graphql.Args() args: UpdateFishBankArgs
  ): Promise<FishBank | null> {
    try {
      return await this.service.updateFishBank({
        ...args,
        data: {
          ...args.data,

          shop: {
            connect: args.data.shop,
          },
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

  @graphql.Mutation(() => FishBank)
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "delete",
    possession: "any",
  })
  async deleteFishBank(
    @graphql.Args() args: DeleteFishBankArgs
  ): Promise<FishBank | null> {
    try {
      return await this.service.deleteFishBank(args);
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
  @graphql.ResolveField(() => Shop, {
    nullable: true,
    name: "shop",
  })
  @nestAccessControl.UseRoles({
    resource: "Shop",
    action: "read",
    possession: "any",
  })
  async getShop(@graphql.Parent() parent: FishBank): Promise<Shop | null> {
    const result = await this.service.getShop(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
