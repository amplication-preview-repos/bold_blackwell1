import { VideoMetrics as TVideoMetrics } from "../api/videoMetrics/VideoMetrics";

export const VIDEOMETRICS_TITLE_FIELD = "id";

export const VideoMetricsTitle = (record: TVideoMetrics): string => {
  return record.id?.toString() || String(record.id);
};
