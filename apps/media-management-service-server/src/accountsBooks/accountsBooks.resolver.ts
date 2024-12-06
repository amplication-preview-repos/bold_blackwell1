import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccountsBooksResolverBase } from "./base/accountsBooks.resolver.base";
import { AccountsBooks } from "./base/AccountsBooks";
import { AccountsBooksService } from "./accountsBooks.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountsBooks)
export class AccountsBooksResolver extends AccountsBooksResolverBase {
  constructor(
    protected readonly service: AccountsBooksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
