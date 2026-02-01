import type {IBaseItem} from "@/model-views";

import './index.scss';


type SwitcherProps<T> = {
  items: IBaseItem<T>[];
};

export const Switcher = <T,>({ items }: SwitcherProps<T>) => {
  return (
    <div className={'switcher-container'}>
      {items.map(i => {
        const { caption, onChange, ...baseProps } = i;
        return <span className={'switcher-container__item'} {...baseProps} onClick={() => {
          onChange(i.value);
        }}>{caption}</span>
      })}
    </div>
  );
};