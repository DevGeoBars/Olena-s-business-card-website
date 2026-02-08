import {type FC} from 'react';

import './index.scss';
import {classNames} from "@/helpers";

type PaintingsProps = {
  className?: string;
  id: string;
  caption: string
}

export const Paintings: FC<PaintingsProps> = ({ id, className }) => {

  const cls = classNames('paintings-container', {}, [className]);

  return (
    <div id={id} className={cls}>Paintings</div>
  );
};