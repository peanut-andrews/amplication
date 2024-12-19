import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BalanceTransactionModuleBase } from "./base/balanceTransaction.module.base";
import { BalanceTransactionService } from "./balanceTransaction.service";
import { BalanceTransactionController } from "./balanceTransaction.controller";

@Module({
  imports: [BalanceTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [BalanceTransactionController],
  providers: [BalanceTransactionService],
  exports: [BalanceTransactionService],
})
export class BalanceTransactionModule {}
