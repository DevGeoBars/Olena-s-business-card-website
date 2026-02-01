import {type FC} from 'react';

import type {IBaseItem} from "@/model-views";

import './index.scss';


type SwitcherProps = {
  items: IBaseItem[];
};

export const Switcher: FC<SwitcherProps> = ({ items }) => {
  return (
    <div className={'switcher-container'}>
      {items.map(i => {
        const { caption, ...baseProps } = i;
        return <span className={'switcher-container__item'} {...baseProps}>{caption}</span>
      })}
    </div>
  );
};