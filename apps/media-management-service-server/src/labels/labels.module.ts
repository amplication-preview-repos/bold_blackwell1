import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LabelsModuleBase } from "./base/labels.module.base";
import { LabelsService } from "./labels.service";
import { LabelsController } from "./labels.controller";
import { LabelsResolver } from "./labels.resolver";

@Module({
  imports: [LabelsModuleBase, forwardRef(() => AuthModule)],
  controllers: [LabelsController],
  providers: [LabelsService, LabelsResolver],
  exports: [LabelsService],
})
export class LabelsModule {}
