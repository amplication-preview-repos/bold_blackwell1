import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TextsLabelsService } from "./textsLabels.service";
import { TextsLabelsControllerBase } from "./base/textsLabels.controller.base";

@swagger.ApiTags("textsLabels")
@common.Controller("textsLabels")
export class TextsLabelsController extends TextsLabelsControllerBase {
  constructor(
    protected readonly service: TextsLabelsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
