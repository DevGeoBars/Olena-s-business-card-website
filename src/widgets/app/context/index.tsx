import type {FC, PropsWithChildren} from "react";

import { StorageProvider, StoresProvider, LocalizationProvider } from "@/providers";


export const ProvidersContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <StorageProvider>
      <StoresProvider>
        <LocalizationProvider>
          {children}
        </LocalizationProvider>
      </StoresProvider>
    </StorageProvider>
  )
}

