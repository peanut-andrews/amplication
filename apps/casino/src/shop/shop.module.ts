import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShopModuleBase } from "./base/shop.module.base";
import { ShopService } from "./shop.service";
import { ShopController } from "./shop.controller";

@Module({
  imports: [ShopModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService],
})
export class ShopModule {}
