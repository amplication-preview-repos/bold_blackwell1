import { AccountsBooks as TAccountsBooks } from "../api/accountsBooks/AccountsBooks";

export const ACCOUNTSBOOKS_TITLE_FIELD = "id";

export const AccountsBooksTitle = (record: TAccountsBooks): string => {
  return record.id?.toString() || String(record.id);
};
