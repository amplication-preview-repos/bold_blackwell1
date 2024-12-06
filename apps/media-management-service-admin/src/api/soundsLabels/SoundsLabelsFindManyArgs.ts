import { SoundsLabelsWhereInput } from "./SoundsLabelsWhereInput";
import { SoundsLabelsOrderByInput } from "./SoundsLabelsOrderByInput";

export type SoundsLabelsFindManyArgs = {
  where?: SoundsLabelsWhereInput;
  orderBy?: Array<SoundsLabelsOrderByInput>;
  skip?: number;
  take?: number;
};
