import type {Theme} from "@/types";

export interface User {
  id: number;
  currentTheme: Theme;
  language: string;
}