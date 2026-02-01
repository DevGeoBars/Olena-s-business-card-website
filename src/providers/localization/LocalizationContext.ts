import {createContext} from "react";

import type {Locals} from "@/types";

export type TLocalizationContext = {
  language: Locals,
  changeLanguage: (lang: Locals) => void,
}
export const LocalizationContext = createContext<TLocalizationContext | null>(null);
