import {type FC} from 'react';

import './index.scss';
import {classNames} from "@/helpers";

type WallPaintingsProps = {
  className?: string;
}

export const WallPaintings: FC<WallPaintingsProps> = ({ className }) => {

  const cls = classNames('wall-paintings-container', {}, [className]);

  return (
    <div className={cls}>WallPaintings</div>
  );
};