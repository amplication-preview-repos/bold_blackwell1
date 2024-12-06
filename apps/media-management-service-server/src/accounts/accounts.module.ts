import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountsModuleBase } from "./base/accounts.module.base";
import { AccountsService } from "./accounts.service";
import { AccountsController } from "./accounts.controller";
import { AccountsResolver } from "./accounts.resolver";

@Module({
  imports: [AccountsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsResolver],
  exports: [AccountsService],
})
export class AccountsModule {}
