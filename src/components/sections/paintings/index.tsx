import {type FC} from 'react';

import './index.scss';


type PaintingsProps = {}

export const Paintings: FC<PaintingsProps> = () => {

  return (
    <div className={'paintings-container'}>Paintings</div>
  );
};