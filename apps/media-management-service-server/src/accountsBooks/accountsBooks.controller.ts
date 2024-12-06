import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountsBooksService } from "./accountsBooks.service";
import { AccountsBooksControllerBase } from "./base/accountsBooks.controller.base";

@swagger.ApiTags("accountsBooks")
@common.Controller("accountsBooks")
export class AccountsBooksController extends AccountsBooksControllerBase {
  constructor(
    protected readonly service: AccountsBooksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
