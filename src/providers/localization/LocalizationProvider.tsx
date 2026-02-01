import {type FC, type ReactNode, useCallback, useEffect, useMemo} from "react";
import {observer} from "mobx-react-lite";

import {useStores} from "@/providers";
import type {Locals} from "@/types";

import {LocalizationContext, type TLocalizationContext} from "./LocalizationContext";


export const LocalizationProvider: FC<{ children: ReactNode}> = observer(({children}) => {
  const { userStore } = useStores();

  const changeLanguage= useCallback((lang: Locals) => {
    console.log(`${lang} selected`)
  }, []);


  useEffect(() => {
    console.log(userStore.User?.language);
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
})