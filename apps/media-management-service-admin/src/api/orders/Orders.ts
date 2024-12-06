import { Accounts } from "../accounts/Accounts";
import { Phones } from "../phones/Phones";
import { Texts } from "../texts/Texts";
import { VideoMetrics } from "../videoMetrics/VideoMetrics";

export type Orders = {
  account?: Accounts | null;
  createdAt: Date;
  id: string;
  phone?: Phones | null;
  text?: Texts | null;
  updatedAt: Date;
  videoMetricsItems?: Array<VideoMetrics>;
};
