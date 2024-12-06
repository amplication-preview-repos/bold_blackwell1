import { PhonesCreateNestedManyWithoutCrewsInput } from "./PhonesCreateNestedManyWithoutCrewsInput";

export type CrewCreateInput = {
  name?: string | null;
  phonesItems?: PhonesCreateNestedManyWithoutCrewsInput;
};
