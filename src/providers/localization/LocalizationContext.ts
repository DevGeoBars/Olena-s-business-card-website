import {createContext} from "react";



export type TLocalizationContext = {
  localization: Record<string, string>,
}
export const LocalizationContext = createContext<TLocalizationContext | null>(null);
