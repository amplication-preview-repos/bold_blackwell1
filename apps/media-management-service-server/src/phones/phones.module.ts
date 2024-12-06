import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PhonesModuleBase } from "./base/phones.module.base";
import { PhonesService } from "./phones.service";
import { PhonesController } from "./phones.controller";
import { PhonesResolver } from "./phones.resolver";

@Module({
  imports: [PhonesModuleBase, forwardRef(() => AuthModule)],
  controllers: [PhonesController],
  providers: [PhonesService, PhonesResolver],
  exports: [PhonesService],
})
export class PhonesModule {}
