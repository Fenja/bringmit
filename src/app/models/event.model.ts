import { EntryModel } from "./entry.model";

export interface EventModel {
  entries: EntryModel[];
  id?: string;
  title: string;
  description: string;
  date: Date | undefined;
  categories: string[];
}

export const defaultCategories = [
  'Kuchen',
  'Brot',
  'Salat',
  'Fleisch',
  'Beilage',
  'Dessert'
]
