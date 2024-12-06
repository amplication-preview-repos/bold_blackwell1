import { Accounts as TAccounts } from "../api/accounts/Accounts";

export const ACCOUNTS_TITLE_FIELD = "accountsName";

export const AccountsTitle = (record: TAccounts): string => {
  return record.accountsName?.toString() || String(record.id);
};
