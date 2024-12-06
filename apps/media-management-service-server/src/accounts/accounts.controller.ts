import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountsService } from "./accounts.service";
import { AccountsControllerBase } from "./base/accounts.controller.base";

@swagger.ApiTags("accounts")
@common.Controller("accounts")
export class AccountsController extends AccountsControllerBase {
  constructor(
    protected readonly service: AccountsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
