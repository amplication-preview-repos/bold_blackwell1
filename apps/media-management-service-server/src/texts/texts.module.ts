import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TextsModuleBase } from "./base/texts.module.base";
import { TextsService } from "./texts.service";
import { TextsController } from "./texts.controller";
import { TextsResolver } from "./texts.resolver";

@Module({
  imports: [TextsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TextsController],
  providers: [TextsService, TextsResolver],
  exports: [TextsService],
})
export class TextsModule {}
