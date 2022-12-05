import { EntryModel } from "./entry.model";

export interface EventModel {
  entries: EntryModel[];
  uid: string;
  title: string;
  description: string;
  date: Date;
  categories: string[];
}
