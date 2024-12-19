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
import { OpenShiftService } from "../openShift.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OpenShiftCreateInput } from "./OpenShiftCreateInput";
import { OpenShift } from "./OpenShift";
import { OpenShiftFindManyArgs } from "./OpenShiftFindManyArgs";
import { OpenShiftWhereUniqueInput } from "./OpenShiftWhereUniqueInput";
import { OpenShiftUpdateInput } from "./OpenShiftUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OpenShiftControllerBase {
  constructor(
    protected readonly service: OpenShiftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OpenShift })
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOpenShift(
    @common.Body() data: OpenShiftCreateInput
  ): Promise<OpenShift> {
    return await this.service.createOpenShift({
      data: {
        ...data,

        cashier: data.cashier
          ? {
              connect: data.cashier,
            }
          : undefined,

        shop: data.shop
          ? {
              connect: data.shop,
            }
          : undefined,
      },
      select: {
        balance: true,
        balanceIn: true,
        balanceOut: true,

        cashier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deletedAt: true,
        endDate: true,
        id: true,
        isDeleted: true,
        jpg: true,
        lastBanks: true,
        moneyIn: true,
        moneyOut: true,
        oldBanks: true,
        oldTotal: true,
        personId: true,
        persons: true,

        shop: {
          select: {
            id: true,
          },
        },

        startDate: true,
        transfers: true,
        updatedAt: true,
        welcomeBonuses: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OpenShift] })
  @ApiNestedQuery(OpenShiftFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async openShifts(@common.Req() request: Request): Promise<OpenShift[]> {
    const args = plainToClass(OpenShiftFindManyArgs, request.query);
    return this.service.openShifts({
      ...args,
      select: {
        balance: true,
        balanceIn: true,
        balanceOut: true,

        cashier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deletedAt: true,
        endDate: true,
        id: true,
        isDeleted: true,
        jpg: true,
        lastBanks: true,
        moneyIn: true,
        moneyOut: true,
        oldBanks: true,
        oldTotal: true,
        personId: true,
        persons: true,

        shop: {
          select: {
            id: true,
          },
        },

        startDate: true,
        transfers: true,
        updatedAt: true,
        welcomeBonuses: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OpenShift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async openShift(
    @common.Param() params: OpenShiftWhereUniqueInput
  ): Promise<OpenShift | null> {
    const result = await this.service.openShift({
      where: params,
      select: {
        balance: true,
        balanceIn: true,
        balanceOut: true,

        cashier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deletedAt: true,
        endDate: true,
        id: true,
        isDeleted: true,
        jpg: true,
        lastBanks: true,
        moneyIn: true,
        moneyOut: true,
        oldBanks: true,
        oldTotal: true,
        personId: true,
        persons: true,

        shop: {
          select: {
            id: true,
          },
        },

        startDate: true,
        transfers: true,
        updatedAt: true,
        welcomeBonuses: true,
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
  @swagger.ApiOkResponse({ type: OpenShift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOpenShift(
    @common.Param() params: OpenShiftWhereUniqueInput,
    @common.Body() data: OpenShiftUpdateInput
  ): Promise<OpenShift | null> {
    try {
      return await this.service.updateOpenShift({
        where: params,
        data: {
          ...data,

          cashier: data.cashier
            ? {
                connect: data.cashier,
              }
            : undefined,

          shop: data.shop
            ? {
                connect: data.shop,
              }
            : undefined,
        },
        select: {
          balance: true,
          balanceIn: true,
          balanceOut: true,

          cashier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          deletedAt: true,
          endDate: true,
          id: true,
          isDeleted: true,
          jpg: true,
          lastBanks: true,
          moneyIn: true,
          moneyOut: true,
          oldBanks: true,
          oldTotal: true,
          personId: true,
          persons: true,

          shop: {
            select: {
              id: true,
            },
          },

          startDate: true,
          transfers: true,
          updatedAt: true,
          welcomeBonuses: true,
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
  @swagger.ApiOkResponse({ type: OpenShift })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OpenShift",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOpenShift(
    @common.Param() params: OpenShiftWhereUniqueInput
  ): Promise<OpenShift | null> {
    try {
      return await this.service.deleteOpenShift({
        where: params,
        select: {
          balance: true,
          balanceIn: true,
          balanceOut: true,

          cashier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          deletedAt: true,
          endDate: true,
          id: true,
          isDeleted: true,
          jpg: true,
          lastBanks: true,
          moneyIn: true,
          moneyOut: true,
          oldBanks: true,
          oldTotal: true,
          personId: true,
          persons: true,

          shop: {
            select: {
              id: true,
            },
          },

          startDate: true,
          transfers: true,
          updatedAt: true,
          welcomeBonuses: true,
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
