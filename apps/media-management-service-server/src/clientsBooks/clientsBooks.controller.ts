import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClientsBooksService } from "./clientsBooks.service";
import { ClientsBooksControllerBase } from "./base/clientsBooks.controller.base";

@swagger.ApiTags("clientsBooks")
@common.Controller("clientsBooks")
export class ClientsBooksController extends ClientsBooksControllerBase {
  constructor(
    protected readonly service: ClientsBooksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
