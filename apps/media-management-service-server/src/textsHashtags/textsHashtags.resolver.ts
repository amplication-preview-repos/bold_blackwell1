import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TextsHashtagsResolverBase } from "./base/textsHashtags.resolver.base";
import { TextsHashtags } from "./base/TextsHashtags";
import { TextsHashtagsService } from "./textsHashtags.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TextsHashtags)
export class TextsHashtagsResolver extends TextsHashtagsResolverBase {
  constructor(
    protected readonly service: TextsHashtagsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
