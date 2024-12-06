import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VideoMetricsService } from "./videoMetrics.service";
import { VideoMetricsControllerBase } from "./base/videoMetrics.controller.base";

@swagger.ApiTags("videoMetrics")
@common.Controller("videoMetrics")
export class VideoMetricsController extends VideoMetricsControllerBase {
  constructor(
    protected readonly service: VideoMetricsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
