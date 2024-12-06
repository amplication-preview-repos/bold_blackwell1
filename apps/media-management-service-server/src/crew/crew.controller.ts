import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CrewService } from "./crew.service";
import { CrewControllerBase } from "./base/crew.controller.base";

@swagger.ApiTags("crews")
@common.Controller("crews")
export class CrewController extends CrewControllerBase {
  constructor(
    protected readonly service: CrewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
