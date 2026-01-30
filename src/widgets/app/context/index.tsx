import type {FC, PropsWithChildren} from "react";

import {StorageProvider, StoresProvider} from "@/providers";


export const ProvidersContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <StorageProvider>
      <StoresProvider>
        {children}
      </StoresProvider>
    </StorageProvider>
  )
}

