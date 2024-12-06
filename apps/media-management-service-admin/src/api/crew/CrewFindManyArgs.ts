import { CrewWhereInput } from "./CrewWhereInput";
import { CrewOrderByInput } from "./CrewOrderByInput";

export type CrewFindManyArgs = {
  where?: CrewWhereInput;
  orderBy?: Array<CrewOrderByInput>;
  skip?: number;
  take?: number;
};
