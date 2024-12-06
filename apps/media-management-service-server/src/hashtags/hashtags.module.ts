import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HashtagsModuleBase } from "./base/hashtags.module.base";
import { HashtagsService } from "./hashtags.service";
import { HashtagsController } from "./hashtags.controller";
import { HashtagsResolver } from "./hashtags.resolver";

@Module({
  imports: [HashtagsModuleBase, forwardRef(() => AuthModule)],
  controllers: [HashtagsController],
  providers: [HashtagsService, HashtagsResolver],
  exports: [HashtagsService],
})
export class HashtagsModule {}
