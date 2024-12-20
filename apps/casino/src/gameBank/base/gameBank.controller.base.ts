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
import { GameBankService } from "../gameBank.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameBankCreateInput } from "./GameBankCreateInput";
import { GameBank } from "./GameBank";
import { GameBankFindManyArgs } from "./GameBankFindManyArgs";
import { GameBankWhereUniqueInput } from "./GameBankWhereUniqueInput";
import { GameBankUpdateInput } from "./GameBankUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameBankControllerBase {
  constructor(
    protected readonly service: GameBankService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameBank })
  @nestAccessControl.UseRoles({
    resource: "GameBank",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGameBank(
    @common.Body() data: GameBankCreateInput
  ): Promise<GameBank> {
    return await this.service.createGameBank({
      data: {
        ...data,

        shop: {
          connect: data.shop,
        },
      },
      select: {
        bonus: true,
        createdAt: true,
        deletedAt: true,
        id: true,
        isDeleted: true,
        little: true,

        shop: {
          select: {
            id: true,
          },
        },

        slots: true,
        tableBank: true,
        tempRtp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GameBank] })
  @ApiNestedQuery(GameBankFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameBank",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameBanks(@common.Req() request: Request): Promise<GameBank[]> {
    const args = plainToClass(GameBankFindManyArgs, request.query);
    return this.service.gameBanks({
      ...args,
      select: {
        bonus: true,
        createdAt: true,
        deletedAt: true,
        id: true,
        isDeleted: true,
        little: true,

        shop: {
          select: {
            id: true,
          },
        },

        slots: true,
        tableBank: true,
        tempRtp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameBank",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameBank(
    @common.Param() params: GameBankWhereUniqueInput
  ): Promise<GameBank | null> {
    const result = await this.service.gameBank({
      where: params,
      select: {
        bonus: true,
        createdAt: true,
        deletedAt: true,
        id: true,
        isDeleted: true,
        little: true,

        shop: {
          select: {
            id: true,
          },
        },

        slots: true,
        tableBank: true,
        tempRtp: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: GameBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameBank",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGameBank(
    @common.Param() params: GameBankWhereUniqueInput,
    @common.Body() data: GameBankUpdateInput
  ): Promise<GameBank | null> {
    try {
      return await this.service.updateGameBank({
        where: params,
        data: {
          ...data,

          shop: {
            connect: data.shop,
          },
        },
        select: {
          bonus: true,
          createdAt: true,
          deletedAt: true,
          id: true,
          isDeleted: true,
          little: true,

          shop: {
            select: {
              id: true,
            },
          },

          slots: true,
          tableBank: true,
          tempRtp: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: GameBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameBank",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameBank(
    @common.Param() params: GameBankWhereUniqueInput
  ): Promise<GameBank | null> {
    try {
      return await this.service.deleteGameBank({
        where: params,
        select: {
          bonus: true,
          createdAt: true,
          deletedAt: true,
          id: true,
          isDeleted: true,
          little: true,

          shop: {
            select: {
              id: true,
            },
          },

          slots: true,
          tableBank: true,
          tempRtp: true,
          updatedAt: true,
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
