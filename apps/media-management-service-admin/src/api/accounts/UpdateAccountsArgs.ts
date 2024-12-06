import { AccountsWhereUniqueInput } from "./AccountsWhereUniqueInput";
import { AccountsUpdateInput } from "./AccountsUpdateInput";

export type UpdateAccountsArgs = {
  where: AccountsWhereUniqueInput;
  data: AccountsUpdateInput;
};
