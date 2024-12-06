import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VideoMetricsResolverBase } from "./base/videoMetrics.resolver.base";
import { VideoMetrics } from "./base/VideoMetrics";
import { VideoMetricsService } from "./videoMetrics.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VideoMetrics)
export class VideoMetricsResolver extends VideoMetricsResolverBase {
  constructor(
    protected readonly service: VideoMetricsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
