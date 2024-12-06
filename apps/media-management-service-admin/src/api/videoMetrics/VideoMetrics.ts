import { Orders } from "../orders/Orders";

export type VideoMetrics = {
  comments: number | null;
  createdAt: Date;
  id: string;
  likes: number | null;
  order?: Orders | null;
  saves: number | null;
  shares: number | null;
  updatedAt: Date;
  views: number | null;
};
