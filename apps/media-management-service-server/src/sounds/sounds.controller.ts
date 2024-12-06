import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SoundsService } from "./sounds.service";
import { SoundsControllerBase } from "./base/sounds.controller.base";

@swagger.ApiTags("sounds")
@common.Controller("sounds")
export class SoundsController extends SoundsControllerBase {
  constructor(
    protected readonly service: SoundsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
