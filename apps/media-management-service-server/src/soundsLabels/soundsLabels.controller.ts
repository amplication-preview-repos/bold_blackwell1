import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SoundsLabelsService } from "./soundsLabels.service";
import { SoundsLabelsControllerBase } from "./base/soundsLabels.controller.base";

@swagger.ApiTags("soundsLabels")
@common.Controller("soundsLabels")
export class SoundsLabelsController extends SoundsLabelsControllerBase {
  constructor(
    protected readonly service: SoundsLabelsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
