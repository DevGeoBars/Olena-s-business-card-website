import {type FC} from 'react';

import './index.scss';
import {classNames} from "@/helpers";

type PaintingsProps = {
  className?: string;
}

export const Paintings: FC<PaintingsProps> = ({ className }) => {

  const cls = classNames('paintings-container', {}, [className]);

  return (
    <div id="paintings" className={cls}>Paintings</div>
  );
};