import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TextsHashtagsService } from "./textsHashtags.service";
import { TextsHashtagsControllerBase } from "./base/textsHashtags.controller.base";

@swagger.ApiTags("textsHashtags")
@common.Controller("textsHashtags")
export class TextsHashtagsController extends TextsHashtagsControllerBase {
  constructor(
    protected readonly service: TextsHashtagsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
