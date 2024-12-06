import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoMetricsServiceBase } from "./base/videoMetrics.service.base";

@Injectable()
export class VideoMetricsService extends VideoMetricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
