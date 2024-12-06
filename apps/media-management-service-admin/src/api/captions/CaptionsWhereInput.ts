import { StringFilter } from "../../util/StringFilter";
import { TextsWhereUniqueInput } from "../texts/TextsWhereUniqueInput";

export type CaptionsWhereInput = {
  id?: StringFilter;
  text?: TextsWhereUniqueInput;
};
