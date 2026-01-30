import {useContext} from "react";

import {StorageContext} from "./StorageContext";

export const useStorage = () => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error('Для использования useStore необходимо обернуть компонент в StoresProvider');
  }
  return context;
};