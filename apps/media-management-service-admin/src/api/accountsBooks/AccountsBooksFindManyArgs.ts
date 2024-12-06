import { AccountsBooksWhereInput } from "./AccountsBooksWhereInput";
import { AccountsBooksOrderByInput } from "./AccountsBooksOrderByInput";

export type AccountsBooksFindManyArgs = {
  where?: AccountsBooksWhereInput;
  orderBy?: Array<AccountsBooksOrderByInput>;
  skip?: number;
  take?: number;
};
