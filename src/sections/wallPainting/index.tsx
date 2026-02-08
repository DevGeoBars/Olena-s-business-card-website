import {type FC} from 'react';

import './index.scss';
import {classNames} from "@/helpers";

type WallPaintingsProps = {
  className?: string;
  id: string;
  caption: string
}

export const WallPaintings: FC<WallPaintingsProps> = ({ id, className }) => {

  const cls = classNames('wall-paintings-container', {}, [className]);

  return (
    <div id={id} className={cls}>WallPaintings</div>
  );
};