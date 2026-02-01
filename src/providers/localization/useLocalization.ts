import {useContext} from "react";

import {LocalizationContext} from "./LocalizationContext.ts";

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('Для использования useLocalization необходимо обернуть компонент в LocalizationProvider');
  }
  return context;
};