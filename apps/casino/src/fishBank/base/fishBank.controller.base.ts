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
import { FishBankService } from "../fishBank.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FishBankCreateInput } from "./FishBankCreateInput";
import { FishBank } from "./FishBank";
import { FishBankFindManyArgs } from "./FishBankFindManyArgs";
import { FishBankWhereUniqueInput } from "./FishBankWhereUniqueInput";
import { FishBankUpdateInput } from "./FishBankUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FishBankControllerBase {
  constructor(
    protected readonly service: FishBankService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FishBank })
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFishBank(
    @common.Body() data: FishBankCreateInput
  ): Promise<FishBank> {
    return await this.service.createFishBank({
      data: {
        ...data,

        shop: {
          connect: data.shop,
        },
      },
      select: {
        createdAt: true,
        deletedAt: true,
        fish: true,
        id: true,
        isDeleted: true,

        shop: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FishBank] })
  @ApiNestedQuery(FishBankFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fishBanks(@common.Req() request: Request): Promise<FishBank[]> {
    const args = plainToClass(FishBankFindManyArgs, request.query);
    return this.service.fishBanks({
      ...args,
      select: {
        createdAt: true,
        deletedAt: true,
        fish: true,
        id: true,
        isDeleted: true,

        shop: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FishBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fishBank(
    @common.Param() params: FishBankWhereUniqueInput
  ): Promise<FishBank | null> {
    const result = await this.service.fishBank({
      where: params,
      select: {
        createdAt: true,
        deletedAt: true,
        fish: true,
        id: true,
        isDeleted: true,

        shop: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: FishBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFishBank(
    @common.Param() params: FishBankWhereUniqueInput,
    @common.Body() data: FishBankUpdateInput
  ): Promise<FishBank | null> {
    try {
      return await this.service.updateFishBank({
        where: params,
        data: {
          ...data,

          shop: {
            connect: data.shop,
          },
        },
        select: {
          createdAt: true,
          deletedAt: true,
          fish: true,
          id: true,
          isDeleted: true,

          shop: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: FishBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FishBank",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFishBank(
    @common.Param() params: FishBankWhereUniqueInput
  ): Promise<FishBank | null> {
    try {
      return await this.service.deleteFishBank({
        where: params,
        select: {
          createdAt: true,
          deletedAt: true,
          fish: true,
          id: true,
          isDeleted: true,

          shop: {
            select: {
              id: true,
            },
          },

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
