import { ClientsBooksCreateNestedManyWithoutClientsItemsInput } from "./ClientsBooksCreateNestedManyWithoutClientsItemsInput";

export type ClientsCreateInput = {
  clientsBooksItems?: ClientsBooksCreateNestedManyWithoutClientsItemsInput;
  name?: string | null;
};
