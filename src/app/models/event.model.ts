import { EntryModel } from "./entry.model";

export interface EventModel {
  entries: EntryModel[] | undefined;
  id?: string;
  title: string;
  description: string;
  date: Date | undefined;
  categories: string[] | undefined;
}
