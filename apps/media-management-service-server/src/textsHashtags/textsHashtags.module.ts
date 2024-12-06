import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TextsHashtagsModuleBase } from "./base/textsHashtags.module.base";
import { TextsHashtagsService } from "./textsHashtags.service";
import { TextsHashtagsController } from "./textsHashtags.controller";
import { TextsHashtagsResolver } from "./textsHashtags.resolver";

@Module({
  imports: [TextsHashtagsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TextsHashtagsController],
  providers: [TextsHashtagsService, TextsHashtagsResolver],
  exports: [TextsHashtagsService],
})
export class TextsHashtagsModule {}
