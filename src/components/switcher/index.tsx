import type {IBaseItem} from "@/model-views";
import {classNames} from "@/helpers";

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
        const isActive = i.value === value;

        return <span
          className={classNames('switcher-container__item', {isActive})}
          onClick={() => {
            onChange(i.value);
          }}
          {...baseProps}
        >
          {caption}
        </span>
      })}
    </div>
  );
};