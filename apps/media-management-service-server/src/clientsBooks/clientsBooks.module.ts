import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClientsBooksModuleBase } from "./base/clientsBooks.module.base";
import { ClientsBooksService } from "./clientsBooks.service";
import { ClientsBooksController } from "./clientsBooks.controller";
import { ClientsBooksResolver } from "./clientsBooks.resolver";

@Module({
  imports: [ClientsBooksModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClientsBooksController],
  providers: [ClientsBooksService, ClientsBooksResolver],
  exports: [ClientsBooksService],
})
export class ClientsBooksModule {}
