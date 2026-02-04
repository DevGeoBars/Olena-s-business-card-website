import {type FC} from 'react';

import './index.scss';

type WallPaintingsProps = {title: string};

export const WallPaintings: FC<WallPaintingsProps> = ({title}) => {
  return (
    <div>{title}</div>
  );
};