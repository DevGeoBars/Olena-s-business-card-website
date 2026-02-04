import {type FC} from 'react';

import './index.scss';

type WallPaintingsProps = {title: string};

export const WallPaintings: FC<WallPaintingsProps> = ({title}) => {
  return (
    <div className={'wall-paintings-container'}>{title}</div>
  );
};