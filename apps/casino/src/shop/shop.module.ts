import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShopModuleBase } from "./base/shop.module.base";
import { ShopService } from "./shop.service";
import { ShopController } from "./shop.controller";
import { ShopResolver } from "./shop.resolver";

@Module({
  imports: [ShopModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShopController],
  providers: [ShopService, ShopResolver],
  exports: [ShopService],
})
export class ShopModule {}
