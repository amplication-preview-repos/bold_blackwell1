import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CrewModuleBase } from "./base/crew.module.base";
import { CrewService } from "./crew.service";
import { CrewController } from "./crew.controller";
import { CrewResolver } from "./crew.resolver";

@Module({
  imports: [CrewModuleBase, forwardRef(() => AuthModule)],
  controllers: [CrewController],
  providers: [CrewService, CrewResolver],
  exports: [CrewService],
})
export class CrewModule {}
