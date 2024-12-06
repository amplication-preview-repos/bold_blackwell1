import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SoundsLabelsResolverBase } from "./base/soundsLabels.resolver.base";
import { SoundsLabels } from "./base/SoundsLabels";
import { SoundsLabelsService } from "./soundsLabels.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SoundsLabels)
export class SoundsLabelsResolver extends SoundsLabelsResolverBase {
  constructor(
    protected readonly service: SoundsLabelsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
