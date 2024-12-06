import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TextsLabelsModuleBase } from "./base/textsLabels.module.base";
import { TextsLabelsService } from "./textsLabels.service";
import { TextsLabelsController } from "./textsLabels.controller";
import { TextsLabelsResolver } from "./textsLabels.resolver";

@Module({
  imports: [TextsLabelsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TextsLabelsController],
  providers: [TextsLabelsService, TextsLabelsResolver],
  exports: [TextsLabelsService],
})
export class TextsLabelsModule {}
