import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TextsLabelsResolverBase } from "./base/textsLabels.resolver.base";
import { TextsLabels } from "./base/TextsLabels";
import { TextsLabelsService } from "./textsLabels.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TextsLabels)
export class TextsLabelsResolver extends TextsLabelsResolverBase {
  constructor(
    protected readonly service: TextsLabelsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
