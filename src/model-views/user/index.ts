import type {Locals, Theme} from "@/types";

import type {Favorite} from "../favorite";

export interface User {
  id: string;
  currentTheme: Theme;
  language: Locals;
}

export interface UserSettings {
  theme: Theme;
  language: Locals;
  notifications: boolean;
  lastLogin?: Date;
  favorites: Favorite[];
}