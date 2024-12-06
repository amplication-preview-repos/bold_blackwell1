import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PhonesListRelationFilter } from "../phones/PhonesListRelationFilter";

export type CrewWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  phonesItems?: PhonesListRelationFilter;
};
