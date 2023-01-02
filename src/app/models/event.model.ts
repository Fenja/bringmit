import { EntryModel } from "./entry.model";

export interface EventModel {
  entries: EntryModel[] | undefined;
  uid: string;
  title: string;
  description: string;
  date: Date | undefined;
  categories: string[] | undefined;
}
