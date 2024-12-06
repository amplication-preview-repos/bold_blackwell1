import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TextsService } from "./texts.service";
import { TextsControllerBase } from "./base/texts.controller.base";

@swagger.ApiTags("texts")
@common.Controller("texts")
export class TextsController extends TextsControllerBase {
  constructor(
    protected readonly service: TextsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
