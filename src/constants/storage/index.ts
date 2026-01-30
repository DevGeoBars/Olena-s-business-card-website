import {generateUUID} from "@/helpers";
import type {User} from "@/model-views";

export const STORAGE_KEYS = {
  USER_DATA: 'userData' as const
};

export const DEFAULT_USER_DATA: User = {
  id: generateUUID(),
  currentTheme: 'light',
  language: 'ru'
}