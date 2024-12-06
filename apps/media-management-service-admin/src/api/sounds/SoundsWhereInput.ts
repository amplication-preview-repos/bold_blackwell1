import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoundsLabelsListRelationFilter } from "../soundsLabels/SoundsLabelsListRelationFilter";

export type SoundsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  soundsLabelsItems?: SoundsLabelsListRelationFilter;
};
