import {type FC, type ReactNode, useCallback, useEffect, useMemo} from "react";

import {useStores} from "@/providers";

import {LocalizationContext, type TLocalizationContext} from "./LocalizationContext";
import type {Locals} from "@/types";


export const LocalizationProvider: FC<{ children: ReactNode}> = ({children}) => {
  const { userStore } = useStores();

  const changeLanguage= useCallback((lang: Locals) => {
    console.log(`${lang} selected`)
  }, []);


  useEffect(() => {
    console.log(userStore.User);
    debugger
  }, [  userStore.User]);


  const contextValue: TLocalizationContext = useMemo(() => {
    return {
      language: userStore.User?.language ?? 'ru',
      changeLanguage: changeLanguage
    }
  }, [userStore.User?.language]);



  return (
    <LocalizationContext.Provider value={contextValue}>
      {children}
    </LocalizationContext.Provider>
  )
}