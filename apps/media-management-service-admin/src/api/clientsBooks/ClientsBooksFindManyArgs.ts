import { ClientsBooksWhereInput } from "./ClientsBooksWhereInput";
import { ClientsBooksOrderByInput } from "./ClientsBooksOrderByInput";

export type ClientsBooksFindManyArgs = {
  where?: ClientsBooksWhereInput;
  orderBy?: Array<ClientsBooksOrderByInput>;
  skip?: number;
  take?: number;
};
