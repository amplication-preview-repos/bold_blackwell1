import { CaptionsWhereInput } from "./CaptionsWhereInput";
import { CaptionsOrderByInput } from "./CaptionsOrderByInput";

export type CaptionsFindManyArgs = {
  where?: CaptionsWhereInput;
  orderBy?: Array<CaptionsOrderByInput>;
  skip?: number;
  take?: number;
};
