import {type FC} from 'react';

import './index.scss';
import {classNames} from "@/helpers";

type MosaicProps = {
  className?: string;
  id: string;
  caption: string
}

export const Mosaic: FC<MosaicProps> = ({ id, className }) => {

  const cls = classNames('mosaic-container', {}, [className]);

  return (
    <div id={id} className={cls}>Mosaic</div>
  );
};