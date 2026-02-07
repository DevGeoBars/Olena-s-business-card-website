import type {IBaseItem} from "@/model-views";
import {classNames} from "@/helpers";

import './index.scss';
import {Typography} from "@/components";

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

        return <Typography
          className={classNames('switcher-container__item', {isActive})}
          onClick={() => {
            onChange(i.value);
            debugger
          }}
          {...baseProps}
        >
          {caption}
        </Typography>
      })}
    </div>
  );
};