import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HashtagsService } from "./hashtags.service";
import { HashtagsControllerBase } from "./base/hashtags.controller.base";

@swagger.ApiTags("hashtags")
@common.Controller("hashtags")
export class HashtagsController extends HashtagsControllerBase {
  constructor(
    protected readonly service: HashtagsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
