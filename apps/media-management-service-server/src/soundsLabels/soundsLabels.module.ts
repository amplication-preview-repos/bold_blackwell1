import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SoundsLabelsModuleBase } from "./base/soundsLabels.module.base";
import { SoundsLabelsService } from "./soundsLabels.service";
import { SoundsLabelsController } from "./soundsLabels.controller";
import { SoundsLabelsResolver } from "./soundsLabels.resolver";

@Module({
  imports: [SoundsLabelsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SoundsLabelsController],
  providers: [SoundsLabelsService, SoundsLabelsResolver],
  exports: [SoundsLabelsService],
})
export class SoundsLabelsModule {}
