import {type FC, type ReactNode, useMemo} from "react";



import {LocalizationContext, type TLocalizationContext} from "./LocalizationContext.ts";
import type {Locals} from "@/types";

type LocalizationProviderProps = {
  currentLanguage: Locals;
}

export const LocalizationProvider: FC<{ children: ReactNode} & LocalizationProviderProps> = ({children, currentLanguage}) => {

  const contextValue: TLocalizationContext = useMemo(() => {
    return {
      currentLanguage
    }
  }, [currentLanguage]);



  return (
    <LocalizationContext.Provider value={contextValue}>
      {children}
    </LocalizationContext.Provider>
  )
}