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
import { BalanceTransactionService } from "../balanceTransaction.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BalanceTransactionCreateInput } from "./BalanceTransactionCreateInput";
import { BalanceTransaction } from "./BalanceTransaction";
import { BalanceTransactionFindManyArgs } from "./BalanceTransactionFindManyArgs";
import { BalanceTransactionWhereUniqueInput } from "./BalanceTransactionWhereUniqueInput";
import { BalanceTransactionUpdateInput } from "./BalanceTransactionUpdateInput";
import { CreateDeposit } from "../CreateDeposit";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BalanceTransactionControllerBase {
  constructor(
    protected readonly service: BalanceTransactionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BalanceTransaction })
  @nestAccessControl.UseRoles({
    resource: "BalanceTransaction",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBalanceTransaction(
    @common.Body() data: BalanceTransactionCreateInput
  ): Promise<BalanceTransaction> {
    return await this.service.createBalanceTransaction({
      data: {
        ...data,

        playerAccount: {
          connect: data.playerAccount,
        },

        product: {
          connect: data.product,
        },

        shop: {
          connect: data.shop,
        },
      },
      select: {
        amount: true,
        bonusIdUsed: true,
        cashierAccountId: true,
        cashierAvatar: true,
        cashierId: true,
        cashiername: true,
        channel: true,
        createdAt: true,
        currency: true,
        direction: true,
        id: true,
        paymentMethod: true,
        personAvatar: true,
        personId: true,
        personname: true,

        playerAccount: {
          select: {
            id: true,
          },
        },

        playerAccountBalanceAfterTransaction: true,

        product: {
          select: {
            id: true,
          },
        },

        salesCommission: true,

        shop: {
          select: {
            id: true,
          },
        },

        shopBalanceAfterTransaction: true,
        status: true,
        totalInCents: true,
        type: true,
        updateLevel: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [BalanceTransaction] })
  @ApiNestedQuery(BalanceTransactionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BalanceTransaction",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async balanceTransactions(
    @common.Req() request: Request
  ): Promise<BalanceTransaction[]> {
    const args = plainToClass(BalanceTransactionFindManyArgs, request.query);
    return this.service.balanceTransactions({
      ...args,
      select: {
        amount: true,
        bonusIdUsed: true,
        cashierAccountId: true,
        cashierAvatar: true,
        cashierId: true,
        cashiername: true,
        channel: true,
        createdAt: true,
        currency: true,
        direction: true,
        id: true,
        paymentMethod: true,
        personAvatar: true,
        personId: true,
        personname: true,

        playerAccount: {
          select: {
            id: true,
          },
        },

        playerAccountBalanceAfterTransaction: true,

        product: {
          select: {
            id: true,
          },
        },

        salesCommission: true,

        shop: {
          select: {
            id: true,
          },
        },

        shopBalanceAfterTransaction: true,
        status: true,
        totalInCents: true,
        type: true,
        updateLevel: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BalanceTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BalanceTransaction",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async balanceTransaction(
    @common.Param() params: BalanceTransactionWhereUniqueInput
  ): Promise<BalanceTransaction | null> {
    const result = await this.service.balanceTransaction({
      where: params,
      select: {
        amount: true,
        bonusIdUsed: true,
        cashierAccountId: true,
        cashierAvatar: true,
        cashierId: true,
        cashiername: true,
        channel: true,
        createdAt: true,
        currency: true,
        direction: true,
        id: true,
        paymentMethod: true,
        personAvatar: true,
        personId: true,
        personname: true,

        playerAccount: {
          select: {
            id: true,
          },
        },

        playerAccountBalanceAfterTransaction: true,

        product: {
          select: {
            id: true,
          },
        },

        salesCommission: true,

        shop: {
          select: {
            id: true,
          },
        },

        shopBalanceAfterTransaction: true,
        status: true,
        totalInCents: true,
        type: true,
        updateLevel: true,
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
  @swagger.ApiOkResponse({ type: BalanceTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BalanceTransaction",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBalanceTransaction(
    @common.Param() params: BalanceTransactionWhereUniqueInput,
    @common.Body() data: BalanceTransactionUpdateInput
  ): Promise<BalanceTransaction | null> {
    try {
      return await this.service.updateBalanceTransaction({
        where: params,
        data: {
          ...data,

          playerAccount: {
            connect: data.playerAccount,
          },

          product: {
            connect: data.product,
          },

          shop: {
            connect: data.shop,
          },
        },
        select: {
          amount: true,
          bonusIdUsed: true,
          cashierAccountId: true,
          cashierAvatar: true,
          cashierId: true,
          cashiername: true,
          channel: true,
          createdAt: true,
          currency: true,
          direction: true,
          id: true,
          paymentMethod: true,
          personAvatar: true,
          personId: true,
          personname: true,

          playerAccount: {
            select: {
              id: true,
            },
          },

          playerAccountBalanceAfterTransaction: true,

          product: {
            select: {
              id: true,
            },
          },

          salesCommission: true,

          shop: {
            select: {
              id: true,
            },
          },

          shopBalanceAfterTransaction: true,
          status: true,
          totalInCents: true,
          type: true,
          updateLevel: true,
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
  @swagger.ApiOkResponse({ type: BalanceTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BalanceTransaction",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBalanceTransaction(
    @common.Param() params: BalanceTransactionWhereUniqueInput
  ): Promise<BalanceTransaction | null> {
    try {
      return await this.service.deleteBalanceTransaction({
        where: params,
        select: {
          amount: true,
          bonusIdUsed: true,
          cashierAccountId: true,
          cashierAvatar: true,
          cashierId: true,
          cashiername: true,
          channel: true,
          createdAt: true,
          currency: true,
          direction: true,
          id: true,
          paymentMethod: true,
          personAvatar: true,
          personId: true,
          personname: true,

          playerAccount: {
            select: {
              id: true,
            },
          },

          playerAccountBalanceAfterTransaction: true,

          product: {
            select: {
              id: true,
            },
          },

          salesCommission: true,

          shop: {
            select: {
              id: true,
            },
          },

          shopBalanceAfterTransaction: true,
          status: true,
          totalInCents: true,
          type: true,
          updateLevel: true,
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

  @common.Post("/:id/deposit")
  @swagger.ApiOkResponse({
    type: Boolean,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreateDeposit(
    @common.Body()
    body: CreateDeposit
  ): Promise<boolean> {
    return this.service.CreateDeposit(body);
  }
}
