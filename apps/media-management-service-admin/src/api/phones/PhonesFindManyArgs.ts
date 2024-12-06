import { PhonesWhereInput } from "./PhonesWhereInput";
import { PhonesOrderByInput } from "./PhonesOrderByInput";

export type PhonesFindManyArgs = {
  where?: PhonesWhereInput;
  orderBy?: Array<PhonesOrderByInput>;
  skip?: number;
  take?: number;
};
