import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { GameBankModule } from "./gameBank/gameBank.module";
import { FishBankModule } from "./fishBank/fishBank.module";
import { PersonModule } from "./person/person.module";
import { StatGameModule } from "./statGame/statGame.module";
import { OpenShiftModule } from "./openShift/openShift.module";
import { StatisticModule } from "./statistic/statistic.module";
import { ShopModule } from "./shop/shop.module";
import { AccountModule } from "./account/account.module";
import { ProductModule } from "./product/product.module";
import { BalanceTransactionModule } from "./balanceTransaction/balanceTransaction.module";
import { GameModule } from "./game/game.module";
import { BetModule } from "./bet/bet.module";
import { MessageModule } from "./message/message.module";
import { RoomModule } from "./room/room.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { NatsModule } from "./nats/nats.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    NatsModule,
    StorageModule,
    ACLModule,
    AuthModule,
    UserModule,
    GameBankModule,
    FishBankModule,
    PersonModule,
    StatGameModule,
    OpenShiftModule,
    StatisticModule,
    ShopModule,
    AccountModule,
    ProductModule,
    BalanceTransactionModule,
    GameModule,
    BetModule,
    MessageModule,
    RoomModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
