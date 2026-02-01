import {createContext} from "react";

import type {Locals} from "@/types";

export type TLocalizationContext = {
  currentLanguage: Locals
}
export const LocalizationContext = createContext<TLocalizationContext | null>(null);
