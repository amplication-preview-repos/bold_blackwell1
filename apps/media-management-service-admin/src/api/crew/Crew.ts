import { Phones } from "../phones/Phones";

export type Crew = {
  createdAt: Date;
  id: string;
  name: string | null;
  phonesItems?: Array<Phones>;
  updatedAt: Date;
};
