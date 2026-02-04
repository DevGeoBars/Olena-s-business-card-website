import {type FC} from 'react';

import './index.scss';

type PaintingsProps = {title: string};

export const Paintings: FC<PaintingsProps> = ({title}) => {
  return (
    <div className={'paintings-container'}>{title}</div>
  );
};