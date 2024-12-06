import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SoundsModuleBase } from "./base/sounds.module.base";
import { SoundsService } from "./sounds.service";
import { SoundsController } from "./sounds.controller";
import { SoundsResolver } from "./sounds.resolver";

@Module({
  imports: [SoundsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SoundsController],
  providers: [SoundsService, SoundsResolver],
  exports: [SoundsService],
})
export class SoundsModule {}
