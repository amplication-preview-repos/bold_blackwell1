import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PhonesService } from "./phones.service";
import { PhonesControllerBase } from "./base/phones.controller.base";

@swagger.ApiTags("phones")
@common.Controller("phones")
export class PhonesController extends PhonesControllerBase {
  constructor(
    protected readonly service: PhonesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
