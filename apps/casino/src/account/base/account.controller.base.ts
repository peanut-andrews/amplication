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
import { AccountService } from "../account.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AccountCreateInput } from "./AccountCreateInput";
import { Account } from "./Account";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountUpdateInput } from "./AccountUpdateInput";
import { BetFindManyArgs } from "../../bet/base/BetFindManyArgs";
import { Bet } from "../../bet/base/Bet";
import { BetWhereUniqueInput } from "../../bet/base/BetWhereUniqueInput";
import { BalanceTransactionFindManyArgs } from "../../balanceTransaction/base/BalanceTransactionFindManyArgs";
import { BalanceTransaction } from "../../balanceTransaction/base/BalanceTransaction";
import { BalanceTransactionWhereUniqueInput } from "../../balanceTransaction/base/BalanceTransactionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AccountControllerBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Account })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAccount(
    @common.Body() data: AccountCreateInput
  ): Promise<Account> {
    return await this.service.createAccount({
      data: {
        ...data,

        person: data.person
          ? {
              connect: data.person,
            }
          : undefined,

        shop: data.shop
          ? {
              connect: data.shop,
            }
          : undefined,
      },
      select: {
        avatar: true,
        balance: true,
        countBalance: true,
        createdAt: true,
        currency: true,
        faceVerificationTime: true,
        id: true,
        isActive: true,
        isExcluded: true,

        person: {
          select: {
            id: true,
          },
        },

        personname: true,
        role: true,
        rtp: true,

        shop: {
          select: {
            id: true,
          },
        },

        totalBonusWon: true,
        totalCashIn: true,
        totalCashOut: true,
        totalLost: true,
        totalWon: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Account] })
  @ApiNestedQuery(AccountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async accounts(@common.Req() request: Request): Promise<Account[]> {
    const args = plainToClass(AccountFindManyArgs, request.query);
    return this.service.accounts({
      ...args,
      select: {
        avatar: true,
        balance: true,
        countBalance: true,
        createdAt: true,
        currency: true,
        faceVerificationTime: true,
        id: true,
        isActive: true,
        isExcluded: true,

        person: {
          select: {
            id: true,
          },
        },

        personname: true,
        role: true,
        rtp: true,

        shop: {
          select: {
            id: true,
          },
        },

        totalBonusWon: true,
        totalCashIn: true,
        totalCashOut: true,
        totalLost: true,
        totalWon: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async account(
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Account | null> {
    const result = await this.service.account({
      where: params,
      select: {
        avatar: true,
        balance: true,
        countBalance: true,
        createdAt: true,
        currency: true,
        faceVerificationTime: true,
        id: true,
        isActive: true,
        isExcluded: true,

        person: {
          select: {
            id: true,
          },
        },

        personname: true,
        role: true,
        rtp: true,

        shop: {
          select: {
            id: true,
          },
        },

        totalBonusWon: true,
        totalCashIn: true,
        totalCashOut: true,
        totalLost: true,
        totalWon: true,
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
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAccount(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() data: AccountUpdateInput
  ): Promise<Account | null> {
    try {
      return await this.service.updateAccount({
        where: params,
        data: {
          ...data,

          person: data.person
            ? {
                connect: data.person,
              }
            : undefined,

          shop: data.shop
            ? {
                connect: data.shop,
              }
            : undefined,
        },
        select: {
          avatar: true,
          balance: true,
          countBalance: true,
          createdAt: true,
          currency: true,
          faceVerificationTime: true,
          id: true,
          isActive: true,
          isExcluded: true,

          person: {
            select: {
              id: true,
            },
          },

          personname: true,
          role: true,
          rtp: true,

          shop: {
            select: {
              id: true,
            },
          },

          totalBonusWon: true,
          totalCashIn: true,
          totalCashOut: true,
          totalLost: true,
          totalWon: true,
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
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAccount(
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Account | null> {
    try {
      return await this.service.deleteAccount({
        where: params,
        select: {
          avatar: true,
          balance: true,
          countBalance: true,
          createdAt: true,
          currency: true,
          faceVerificationTime: true,
          id: true,
          isActive: true,
          isExcluded: true,

          person: {
            select: {
              id: true,
            },
          },

          personname: true,
          role: true,
          rtp: true,

          shop: {
            select: {
              id: true,
            },
          },

          totalBonusWon: true,
          totalCashIn: true,
          totalCashOut: true,
          totalLost: true,
          totalWon: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/bets")
  @ApiNestedQuery(BetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "any",
  })
  async findBets(
    @common.Req() request: Request,
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Bet[]> {
    const query = plainToClass(BetFindManyArgs, request.query);
    const results = await this.service.findBets(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bets")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async connectBets(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: BetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bets: {
        connect: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bets")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateBets(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: BetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bets: {
        set: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bets")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async disconnectBets(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: BetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bets: {
        disconnect: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/transactions")
  @ApiNestedQuery(BalanceTransactionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BalanceTransaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<BalanceTransaction[]> {
    const query = plainToClass(BalanceTransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async connectTransactions(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: BalanceTransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateTransactions(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: BalanceTransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async disconnectTransactions(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: BalanceTransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }
}
