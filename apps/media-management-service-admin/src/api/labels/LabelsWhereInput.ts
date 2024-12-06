import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoundsLabelsListRelationFilter } from "../soundsLabels/SoundsLabelsListRelationFilter";
import { TextsLabelsListRelationFilter } from "../textsLabels/TextsLabelsListRelationFilter";

export type LabelsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  soundsLabelsItems?: SoundsLabelsListRelationFilter;
  textsLabelsItems?: TextsLabelsListRelationFilter;
};
