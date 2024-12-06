import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BooksService } from "./books.service";
import { BooksControllerBase } from "./base/books.controller.base";

@swagger.ApiTags("books")
@common.Controller("books")
export class BooksController extends BooksControllerBase {
  constructor(
    protected readonly service: BooksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
