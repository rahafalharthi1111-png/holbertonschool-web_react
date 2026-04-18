import { insertRow } from "./crud";

export type RowID = "number";

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
