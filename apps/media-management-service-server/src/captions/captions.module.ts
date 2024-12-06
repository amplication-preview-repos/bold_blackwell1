import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CaptionsModuleBase } from "./base/captions.module.base";
import { CaptionsService } from "./captions.service";
import { CaptionsController } from "./captions.controller";
import { CaptionsResolver } from "./captions.resolver";

@Module({
  imports: [CaptionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [CaptionsController],
  providers: [CaptionsService, CaptionsResolver],
  exports: [CaptionsService],
})
export class CaptionsModule {}
