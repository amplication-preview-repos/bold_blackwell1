import { VideoMetricsWhereInput } from "./VideoMetricsWhereInput";
import { VideoMetricsOrderByInput } from "./VideoMetricsOrderByInput";

export type VideoMetricsFindManyArgs = {
  where?: VideoMetricsWhereInput;
  orderBy?: Array<VideoMetricsOrderByInput>;
  skip?: number;
  take?: number;
};
