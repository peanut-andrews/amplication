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
import { Game } from "./Game";
import { GameCountArgs } from "./GameCountArgs";
import { GameFindManyArgs } from "./GameFindManyArgs";
import { GameFindUniqueArgs } from "./GameFindUniqueArgs";
import { CreateGameArgs } from "./CreateGameArgs";
import { UpdateGameArgs } from "./UpdateGameArgs";
import { DeleteGameArgs } from "./DeleteGameArgs";
import { BetFindManyArgs } from "../../bet/base/BetFindManyArgs";
import { Bet } from "../../bet/base/Bet";
import { StatGameFindManyArgs } from "../../statGame/base/StatGameFindManyArgs";
import { StatGame } from "../../statGame/base/StatGame";
import { Shop } from "../../shop/base/Shop";
import { GameService } from "../game.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Game)
export class GameResolverBase {
  constructor(
    protected readonly service: GameService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "read",
    possession: "any",
  })
  async _gamesMeta(
    @graphql.Args() args: GameCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Game])
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "read",
    possession: "any",
  })
  async games(@graphql.Args() args: GameFindManyArgs): Promise<Game[]> {
    return this.service.games(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Game, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "read",
    possession: "own",
  })
  async game(@graphql.Args() args: GameFindUniqueArgs): Promise<Game | null> {
    const result = await this.service.game(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Game)
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "create",
    possession: "any",
  })
  async createGame(@graphql.Args() args: CreateGameArgs): Promise<Game> {
    return await this.service.createGame({
      ...args,
      data: {
        ...args.data,

        shop: args.data.shop
          ? {
              connect: args.data.shop,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Game)
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "update",
    possession: "any",
  })
  async updateGame(@graphql.Args() args: UpdateGameArgs): Promise<Game | null> {
    try {
      return await this.service.updateGame({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => Game)
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "delete",
    possession: "any",
  })
  async deleteGame(@graphql.Args() args: DeleteGameArgs): Promise<Game | null> {
    try {
      return await this.service.deleteGame(args);
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
  @graphql.ResolveField(() => [Bet], { name: "bets" })
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "any",
  })
  async findBets(
    @graphql.Parent() parent: Game,
    @graphql.Args() args: BetFindManyArgs
  ): Promise<Bet[]> {
    const results = await this.service.findBets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [StatGame], { name: "stats" })
  @nestAccessControl.UseRoles({
    resource: "StatGame",
    action: "read",
    possession: "any",
  })
  async findStats(
    @graphql.Parent() parent: Game,
    @graphql.Args() args: StatGameFindManyArgs
  ): Promise<StatGame[]> {
    const results = await this.service.findStats(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getShop(@graphql.Parent() parent: Game): Promise<Shop | null> {
    const result = await this.service.getShop(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
