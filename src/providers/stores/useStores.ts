import {useContext} from "react";

import {StoresContext} from "./StoresContext.ts";

export const useStores = () => {
  const context = useContext(StoresContext);
  if (!context) {
    throw new Error('Для использования useStore необходимо обернуть компонент в StoresProvider');
  }
  return context;
};

export const useUserStore = () => useStores().userStore;
export const useFavoritesStore = () => useStores().favoritesStore;