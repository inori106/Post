import { Category } from './Category';
export type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  category?: Category[];
};
