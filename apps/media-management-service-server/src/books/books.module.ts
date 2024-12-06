import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BooksModuleBase } from "./base/books.module.base";
import { BooksService } from "./books.service";
import { BooksController } from "./books.controller";
import { BooksResolver } from "./books.resolver";

@Module({
  imports: [BooksModuleBase, forwardRef(() => AuthModule)],
  controllers: [BooksController],
  providers: [BooksService, BooksResolver],
  exports: [BooksService],
})
export class BooksModule {}
