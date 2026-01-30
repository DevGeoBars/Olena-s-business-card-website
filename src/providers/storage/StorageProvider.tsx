import {type FC, type ReactNode} from "react";

import {createStorage} from "@/helpers";
import type {IUserStorage} from "@/model-views";

import {StorageContext} from "./StorageContext";



export const StorageProvider: FC<{ children: ReactNode }> = ({children}) => {
  const storage = createStorage<IUserStorage>();

  return (
    <StorageContext.Provider value={{ storage }}>
      {children}
    </StorageContext.Provider>
  )
}