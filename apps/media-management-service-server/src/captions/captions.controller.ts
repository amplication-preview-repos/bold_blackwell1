import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CaptionsService } from "./captions.service";
import { CaptionsControllerBase } from "./base/captions.controller.base";

@swagger.ApiTags("captions")
@common.Controller("captions")
export class CaptionsController extends CaptionsControllerBase {
  constructor(
    protected readonly service: CaptionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
