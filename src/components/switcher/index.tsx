import type {IBaseItem} from "@/model-views";

import './index.scss';


type SwitcherProps<T = undefined> = {
  items: IBaseItem<T>[];
  value: T;
};

export const Switcher = <T,>({ items, value }: SwitcherProps<T>) => {
  return (
    <div className={'switcher-container'}>
      {items.map(i => {

        const { caption, onChange, ...baseProps } = i;
        const isActive = i.value === value ? 'isActive' : '';

        console.log('isActive',isActive)
        return <span className={`switcher-container__item ${isActive}`} {...baseProps} onClick={() => {
          onChange(i.value);
        }}>{caption}</span>
      })}
    </div>
  );
};