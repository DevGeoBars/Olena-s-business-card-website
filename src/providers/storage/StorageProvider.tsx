import type {FC, ReactNode} from "react";

import {createStorage} from "@/helpers";

import {StorageContext} from "./StorageContext";


export const StorageProvider: FC<{ children: ReactNode }> = ({children}) => {
  const storage = createStorage();
  return (
    <StorageContext.Provider value={{ storage }}>
      {children}
    </StorageContext.Provider>
  )
}