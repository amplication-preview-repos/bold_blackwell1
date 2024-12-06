import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountsBooksModuleBase } from "./base/accountsBooks.module.base";
import { AccountsBooksService } from "./accountsBooks.service";
import { AccountsBooksController } from "./accountsBooks.controller";
import { AccountsBooksResolver } from "./accountsBooks.resolver";

@Module({
  imports: [AccountsBooksModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountsBooksController],
  providers: [AccountsBooksService, AccountsBooksResolver],
  exports: [AccountsBooksService],
})
export class AccountsBooksModule {}
