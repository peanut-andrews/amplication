/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BetService } from "../bet.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BetCreateInput } from "./BetCreateInput";
import { Bet } from "./Bet";
import { BetFindManyArgs } from "./BetFindManyArgs";
import { BetWhereUniqueInput } from "./BetWhereUniqueInput";
import { BetUpdateInput } from "./BetUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BetControllerBase {
  constructor(
    protected readonly service: BetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bet })
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBet(@common.Body() data: BetCreateInput): Promise<Bet> {
    return await this.service.createBet({
      data: {
        ...data,

        account: data.account
          ? {
              connect: data.account,
            }
          : undefined,

        game: data.game
          ? {
              connect: data.game,
            }
          : undefined,

        shop: data.shop
          ? {
              connect: data.shop,
            }
          : undefined,
      },
      select: {
        account: {
          select: {
            id: true,
          },
        },

        betAmount: true,
        createdAt: true,
        currency: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,
        multiplier: true,

        shop: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        winAmount: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Bet] })
  @ApiNestedQuery(BetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bets(@common.Req() request: Request): Promise<Bet[]> {
    const args = plainToClass(BetFindManyArgs, request.query);
    return this.service.bets({
      ...args,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        betAmount: true,
        createdAt: true,
        currency: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,
        multiplier: true,

        shop: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        winAmount: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bet(@common.Param() params: BetWhereUniqueInput): Promise<Bet | null> {
    const result = await this.service.bet({
      where: params,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        betAmount: true,
        createdAt: true,
        currency: true,

        game: {
          select: {
            id: true,
          },
        },

        id: true,
        multiplier: true,

        shop: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        winAmount: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBet(
    @common.Param() params: BetWhereUniqueInput,
    @common.Body() data: BetUpdateInput
  ): Promise<Bet | null> {
    try {
      return await this.service.updateBet({
        where: params,
        data: {
          ...data,

          account: data.account
            ? {
                connect: data.account,
              }
            : undefined,

          game: data.game
            ? {
                connect: data.game,
              }
            : undefined,

          shop: data.shop
            ? {
                connect: data.shop,
              }
            : undefined,
        },
        select: {
          account: {
            select: {
              id: true,
            },
          },

          betAmount: true,
          createdAt: true,
          currency: true,

          game: {
            select: {
              id: true,
            },
          },

          id: true,
          multiplier: true,

          shop: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          winAmount: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBet(
    @common.Param() params: BetWhereUniqueInput
  ): Promise<Bet | null> {
    try {
      return await this.service.deleteBet({
        where: params,
        select: {
          account: {
            select: {
              id: true,
            },
          },

          betAmount: true,
          createdAt: true,
          currency: true,

          game: {
            select: {
              id: true,
            },
          },

          id: true,
          multiplier: true,

          shop: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          winAmount: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
