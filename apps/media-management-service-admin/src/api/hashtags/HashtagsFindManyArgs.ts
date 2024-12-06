import { HashtagsWhereInput } from "./HashtagsWhereInput";
import { HashtagsOrderByInput } from "./HashtagsOrderByInput";

export type HashtagsFindManyArgs = {
  where?: HashtagsWhereInput;
  orderBy?: Array<HashtagsOrderByInput>;
  skip?: number;
  take?: number;
};
