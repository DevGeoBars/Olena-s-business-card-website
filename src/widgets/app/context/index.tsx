import type {FC, PropsWithChildren} from "react";

import { StorageProvider, StoresProvider } from "@/providers";
import { rootStore } from "@/stores";


export const ProvidersContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <StorageProvider>
      <StoresProvider store={rootStore}>
        {children}
      </StoresProvider>
    </StorageProvider>
  )
}

