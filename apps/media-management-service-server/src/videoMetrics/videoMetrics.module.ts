import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VideoMetricsModuleBase } from "./base/videoMetrics.module.base";
import { VideoMetricsService } from "./videoMetrics.service";
import { VideoMetricsController } from "./videoMetrics.controller";
import { VideoMetricsResolver } from "./videoMetrics.resolver";

@Module({
  imports: [VideoMetricsModuleBase, forwardRef(() => AuthModule)],
  controllers: [VideoMetricsController],
  providers: [VideoMetricsService, VideoMetricsResolver],
  exports: [VideoMetricsService],
})
export class VideoMetricsModule {}
