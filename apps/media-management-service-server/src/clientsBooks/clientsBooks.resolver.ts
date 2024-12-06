import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClientsBooksResolverBase } from "./base/clientsBooks.resolver.base";
import { ClientsBooks } from "./base/ClientsBooks";
import { ClientsBooksService } from "./clientsBooks.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClientsBooks)
export class ClientsBooksResolver extends ClientsBooksResolverBase {
  constructor(
    protected readonly service: ClientsBooksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
