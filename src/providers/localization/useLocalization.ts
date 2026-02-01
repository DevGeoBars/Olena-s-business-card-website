import {useCallback, useContext} from "react";

import {LocalizationContext} from "./LocalizationContext.ts";

export const useLocalization = () => {
  const context = useContext(LocalizationContext);

  const translate = useCallback((field: string) => {
    return context?.localization[field]
  }, [context?.localization]);

  if (!context) {
    throw new Error('Для использования useLocalization необходимо обернуть компонент в LocalizationProvider');
  }
  return {
    translate,
    localization: context?.localization,
  };
};