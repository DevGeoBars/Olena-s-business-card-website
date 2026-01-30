import type {FC, ReactNode} from "react";

import {RootStore} from "@/stores";
import {useStorage} from "@/providers";

import {StoresContext} from "./StoresContext";


export const StoresProvider: FC<{ children: ReactNode }> = ({children}) => {
  const { storage } = useStorage()
  const rootStore = new RootStore(storage);

  return (
    <StoresContext.Provider value={rootStore}>
      {children}
    </StoresContext.Provider>
  )
}