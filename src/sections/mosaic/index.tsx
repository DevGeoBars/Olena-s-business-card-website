import {type FC} from 'react';

import './index.scss';
import {classNames} from "@/helpers";

type MosaicProps = {
  className?: string;
}

export const Mosaic: FC<MosaicProps> = ({className}) => {

  const cls = classNames('mosaic-container', {}, [className]);

  return (
    <div className={cls}>Mosaic</div>
  );
};