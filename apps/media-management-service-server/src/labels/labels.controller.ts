import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LabelsService } from "./labels.service";
import { LabelsControllerBase } from "./base/labels.controller.base";

@swagger.ApiTags("labels")
@common.Controller("labels")
export class LabelsController extends LabelsControllerBase {
  constructor(
    protected readonly service: LabelsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
