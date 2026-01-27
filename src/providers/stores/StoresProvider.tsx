import type {FC, ReactNode} from "react";

import type {RootStore} from "@/stores";
import {StoresContext} from "./StoresContext.ts";

export const StoresProvider: FC<{
  store: RootStore;
  children: ReactNode;
}> = ({
  store, children
}) => {
  return (
    <StoresContext.Provider value={store}>
      {children}
    </StoresContext.Provider>
  )
}