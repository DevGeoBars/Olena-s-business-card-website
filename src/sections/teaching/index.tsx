import {type FC} from 'react';

import './index.scss';
import {classNames} from "@/helpers";

type TeachingProps = {
  className?: string;
  id: string;
  caption: string
}

export const Teaching: FC<TeachingProps> = ({ id, className }) => {

  const cls = classNames('teaching-container', {}, [className]);

  return (
    <div id={id} className={cls}>Teaching</div>
  );
};