import {type FC} from 'react';

import type {IBaseItem} from "@/model-views";

type SwitcherProps = {
  items: IBaseItem[];
};

export const Switcher: FC<SwitcherProps> = ({ items }) => {
  return (
    <div>
      {items.map(i => i.caption)}
    </div>
  );
};