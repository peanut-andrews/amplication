import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PersonModuleBase } from "./base/person.module.base";
import { PersonService } from "./person.service";
import { PersonController } from "./person.controller";

@Module({
  imports: [PersonModuleBase, forwardRef(() => AuthModule)],
  controllers: [PersonController],
  providers: [PersonService],
  exports: [PersonService],
})
export class PersonModule {}
