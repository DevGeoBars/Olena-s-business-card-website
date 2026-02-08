import {type FC} from 'react';

import './index.scss';
import {classNames} from "@/helpers";

type TeachingProps = {
  className?: string;
}

export const Teaching: FC<TeachingProps> = ({ className }) => {

  const cls = classNames('teaching-container', {}, [className]);

  return (
    <div className={cls}>Teaching</div>
  );
};