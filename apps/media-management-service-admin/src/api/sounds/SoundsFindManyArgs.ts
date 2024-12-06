import { SoundsWhereInput } from "./SoundsWhereInput";
import { SoundsOrderByInput } from "./SoundsOrderByInput";

export type SoundsFindManyArgs = {
  where?: SoundsWhereInput;
  orderBy?: Array<SoundsOrderByInput>;
  skip?: number;
  take?: number;
};
