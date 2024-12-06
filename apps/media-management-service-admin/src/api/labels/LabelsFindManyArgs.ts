import { LabelsWhereInput } from "./LabelsWhereInput";
import { LabelsOrderByInput } from "./LabelsOrderByInput";

export type LabelsFindManyArgs = {
  where?: LabelsWhereInput;
  orderBy?: Array<LabelsOrderByInput>;
  skip?: number;
  take?: number;
};
