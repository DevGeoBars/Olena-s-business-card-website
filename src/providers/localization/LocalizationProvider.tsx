import {type FC, type ReactNode, useEffect, useMemo} from "react";
import {observer} from "mobx-react-lite";

import {useStores} from "@/providers";

import {EN_LOCALS} from "@/localization/locals/en";
import {RU_LOCALS} from "@/localization/locals/ru";

import {LocalizationContext, type TLocalizationContext} from "./LocalizationContext";



export const LocalizationProvider: FC<{ children: ReactNode}> = observer(({children}) => {
  const { userStore } = useStores();


  useEffect(() => {
    console.log(userStore.User?.language);
  }, [userStore.User?.language]);


  const contextValue: TLocalizationContext = useMemo(() => {
    return {
      localization: userStore.User?.language === 'ru' ? RU_LOCALS : EN_LOCALS,
    }
  }, [userStore.User?.language]);



  return (
    <LocalizationContext.Provider value={contextValue}>
      {children}
    </LocalizationContext.Provider>
  )
})