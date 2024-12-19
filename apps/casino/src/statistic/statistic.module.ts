import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StatisticModuleBase } from "./base/statistic.module.base";
import { StatisticService } from "./statistic.service";
import { StatisticController } from "./statistic.controller";
import { StatisticResolver } from "./statistic.resolver";

@Module({
  imports: [StatisticModuleBase, forwardRef(() => AuthModule)],
  controllers: [StatisticController],
  providers: [StatisticService, StatisticResolver],
  exports: [StatisticService],
})
export class StatisticModule {}
